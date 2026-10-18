#!/usr/bin/env python3
"""Refresh the totals behind mo7albader.com/tokens.

Reads Claude Code transcripts on this Mac, merges the GPT numbers passed in from
the ChatGPT profile, and writes the result to the ANALYTICS_KV key `tokens:latest`
that the Worker serves at /api/tokens.

Claude Code deletes old transcripts, so per-day totals are kept in ledger.json
(a day only ever grows) and the lifetime total is anchored to the /stats screen.

Usage:
  python3 scripts/tokens/update.py --gpt-json '{"lifetime_total":..., "sum_last7":..., ...}'
  python3 scripts/tokens/update.py --gpt-skip            # Claude only, keep last GPT values
  python3 scripts/tokens/update.py ... --dry-run         # print the payload, no KV write
  python3 scripts/tokens/update.py --seed                # (re)build the ledger from disk, no KV write

The GPT JSON is what this snippet returns in a logged-in chatgpt.com tab:
  fetch('/backend-api/profiles/mo7albader/page?personal=false').then(r=>r.json()).then(j=>{
    const p=j.page, d=p.activity_graph.daily_usage_buckets, s=a=>a.reduce((t,b)=>t+(b.tokens||0),0);
    return {lifetime_total:p.stats.agentic.lifetime_tokens, peak_day:p.stats.agentic.peak_daily_tokens,
      longest_turn_sec:p.stats.agentic.longest_running_turn_sec, streak:p.stats.current_streak_days,
      sum_last7:s(d.slice(-7)), active_days:d.filter(b=>b.tokens>0).length,
      threads:p.insights.agentic.total_threads, skills_used:p.insights.total_skills_used,
      days:d.map(b=>[b.start_date,b.tokens])}})
"""
import argparse, collections, datetime as dt, glob, json, os, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(os.path.dirname(HERE))
ANCHORS = os.path.join(HERE, "anchors.json")
LEDGER = os.path.join(HERE, "ledger.json")
KV_NAMESPACE = "d6bcf6c83f934720a9866e5b95e990f5"
KV_KEY = "tokens:latest"
NODE22 = os.path.expanduser("~/.nvm/versions/node/v22.23.2/bin")
RIYADH = dt.timezone(dt.timedelta(hours=3))


def fmt_short(n):
    if n >= 1e9: return f"{n/1e9:.2f}B"
    if n >= 1e6: return f"{n/1e6:.0f}M"
    return f"{n:,}"


def today():
    return dt.datetime.now(RIYADH).date()


def scan_claude():
    """Per-day token totals (Riyadh days), session ids and per-model totals from every transcript on disk."""
    root = os.path.expanduser("~/.claude/projects")
    days, sessions, models = collections.Counter(), set(), collections.Counter()
    for path in glob.glob(root + "/**/*.jsonl", recursive=True):
        with open(path, errors="ignore") as fh:
            for line in fh:
                if '"usage"' not in line: continue
                try: e = json.loads(line)
                except ValueError: continue
                if e.get("type") != "assistant": continue
                m = e.get("message") or {}; u = m.get("usage") or {}
                s = sum(u.get(k) or 0 for k in ("input_tokens", "output_tokens", "cache_read_input_tokens", "cache_creation_input_tokens"))
                if not s: continue
                try: day = dt.datetime.fromisoformat((e.get("timestamp") or "").replace("Z", "+00:00")).astimezone(RIYADH).date()
                except ValueError: continue
                days[day.isoformat()] += s
                sessions.add(e.get("sessionId") or path)
                models[m.get("model") or ""] += s
    return days, sessions, models


def load_ledger():
    if os.path.exists(LEDGER):
        return json.load(open(LEDGER))
    return {"days": {}, "sessions": [], "models": {}}


def merge_ledger(ledger, days, sessions, models):
    """A day's total only grows; a deleted transcript must not shrink it."""
    for d, v in days.items():
        ledger["days"][d] = max(ledger["days"].get(d, 0), v)
    ledger["sessions"] = sorted(set(ledger["sessions"]) | sessions)
    for m, v in models.items():
        ledger["models"][m] = max(ledger["models"].get(m, 0), v)
    ledger["scannedAt"] = dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    return ledger


def save_ledger(ledger):
    json.dump(ledger, open(LEDGER, "w"), indent=1, sort_keys=True)


def streak(days_map):
    """Consecutive Riyadh days with usage, ending today or yesterday."""
    d = today()
    if not days_map.get(d.isoformat()): d -= dt.timedelta(days=1)
    run = 0
    while days_map.get(d.isoformat()): run += 1; d -= dt.timedelta(days=1)
    return run


HEAT_DAYS = 98   # 14 weeks, ending today (Riyadh)
RATE_DAYS = 14   # the page projects between refreshes at half the median day of the last two weeks,
RATE_SHARE = .5  # so the next real number is almost always above what the page was showing


def rate(day_values, end):
    """Conservative tokens/day: RATE_SHARE x the median of the RATE_DAYS complete days before `end`."""
    vals = sorted(day_values.get((end - dt.timedelta(days=i)).isoformat(), 0) for i in range(1, RATE_DAYS + 1))
    mid = len(vals) // 2
    return int(RATE_SHARE * (vals[mid] if len(vals) % 2 else (vals[mid - 1] + vals[mid]) / 2))


def heat(day_values):
    """Levels 0-4 for the last HEAT_DAYS days, oldest first. Non-zero days are split into quartiles."""
    end = today()
    vals = [day_values.get((end - dt.timedelta(days=HEAT_DAYS - 1 - i)).isoformat(), 0) for i in range(HEAT_DAYS)]
    nz = sorted(v for v in vals if v > 0)
    if not nz: return [0] * HEAT_DAYS
    q = [nz[int(len(nz) * f)] for f in (.25, .5, .75)]
    return [0 if v <= 0 else 1 + sum(v > t for t in q) for v in vals]


def build_claude(a, ledger):
    days = ledger["days"]
    ledger_total = sum(days.values())
    anchor_date = dt.date.fromisoformat(a["anchorDate"])
    peak_day, peak_val = max(days.items(), key=lambda kv: kv[1])
    chain_ok = streak(days) >= (today() - anchor_date).days  # unbroken since the anchor day
    cur_streak = a["statsStreak"] + (today() - anchor_date).days if chain_ok else streak(days)
    active_after = len([d for d, v in days.items() if d > a["anchorDate"] and v])
    return {
        "total": int(a["statsTotal"] + (ledger_total - a["ledgerTotalAtAnchor"])),
        "perDay": rate(days, today()),
        "stats": {
            "streak": cur_streak,
            "activeDays": a["statsActiveDays"] + active_after,
            "sessions": a["statsSessions"] + (len(ledger["sessions"]) - a["ledgerSessionsAtAnchor"]),
            "peak": int(peak_val),
            "peakDate": peak_day,
            "longest": a["longestSession"],
        },
        "heat": heat(days),
    }


def build_gpt(g, a):
    sec = int(g.get("longest_turn_sec") or 0)
    series = {d: int(v or 0) for d, v in (g.get("days") or [])}
    peak_date = max(series.items(), key=lambda kv: kv[1])[0] if series else None
    return {
        "total": int(g["lifetime_total"]),
        "perDay": rate(series, dt.datetime.now(dt.timezone.utc).date()),   # profile days are UTC
        "stats": {
            "streak": int(g["streak"]),
            "activeDays": int(g["active_days"]),
            "threads": int(g["threads"]),
            "peak": int(g["peak_day"]),
            "peakDate": peak_date,
            "longest": f"{sec // 3600}h {sec % 3600 // 60}m",
            "skills": int(g.get("skills_used") or 0),
        },
        "heat": heat(series),
    }


def env22():
    e = dict(os.environ); e["PATH"] = NODE22 + ":" + e.get("PATH", ""); return e


def wrangler(*args, timeout=120):
    return subprocess.run(["npx", "wrangler", *args], cwd=REPO, capture_output=True, text=True, timeout=timeout, env=env22())


def kv_get():
    r = wrangler("kv", "key", "get", KV_KEY, "--namespace-id", KV_NAMESPACE, "--remote")
    try: return json.loads(r.stdout) if r.returncode == 0 else None
    except ValueError: return None


def kv_put(payload):
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fh:
        json.dump(payload, fh); path = fh.name
    r = wrangler("kv", "key", "put", KV_KEY, "--namespace-id", KV_NAMESPACE, "--remote", "--path", path)
    os.unlink(path)
    if r.returncode != 0:
        sys.exit("wrangler kv put failed:\n" + r.stderr[-800:])


def seed(anchors):
    """Build the ledger from what is on disk now and re-anchor to it, keeping the /stats-based total consistent."""
    days, sessions, models = scan_claude()
    ledger = merge_ledger(load_ledger(), days, sessions, models)
    a = anchors["claude"]
    total_now = sum(ledger["days"].values())
    if "ledgerTotalAtAnchor" in a:
        a["statsTotal"] += total_now - a["ledgerTotalAtAnchor"]
        a["statsSessions"] += len(ledger["sessions"]) - a["ledgerSessionsAtAnchor"]
    a["ledgerTotalAtAnchor"] = total_now
    a["ledgerSessionsAtAnchor"] = len(ledger["sessions"])
    save_ledger(ledger)
    json.dump(anchors, open(ANCHORS, "w"), indent=2, ensure_ascii=False)
    print(f"ledger: {len(ledger['days'])} days, {len(ledger['sessions'])} sessions, {total_now:,} tokens on disk")
    print(f"anchor: statsTotal {a['statsTotal']:,} · statsSessions {a['statsSessions']}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gpt-json", help="JSON from the ChatGPT profile endpoint (see module docstring)")
    ap.add_argument("--gpt-skip", action="store_true", help="keep the GPT numbers already in KV")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--seed", action="store_true", help="rebuild the ledger from disk and re-anchor; writes nothing to KV")
    args = ap.parse_args()

    anchors = json.load(open(ANCHORS))
    if args.seed:
        return seed(anchors)
    if not args.gpt_json and not args.gpt_skip:
        ap.error("pass --gpt-json or --gpt-skip")
    if "ledgerTotalAtAnchor" not in anchors["claude"]:
        sys.exit("run --seed once first")

    days, sessions, models = scan_claude()
    ledger = merge_ledger(load_ledger(), days, sessions, models)
    if not args.dry_run: save_ledger(ledger)

    payload = {"updatedAt": dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z"),
               "claude": build_claude(anchors["claude"], ledger)}
    if args.gpt_json:
        payload["gpt"] = build_gpt(json.loads(args.gpt_json), anchors["gpt"])
    else:
        prev = kv_get()
        if not prev or "gpt" not in prev:
            sys.exit("no previous GPT numbers in KV; pass --gpt-json")
        payload["gpt"] = prev["gpt"]; payload["gptStale"] = True

    print(json.dumps(payload, indent=2, ensure_ascii=False))
    if args.dry_run:
        print("\n(dry run, nothing written)"); return
    prev = kv_get()
    kv_put(payload)
    print(f"\nKV {KV_KEY} updated. Claude {payload['claude']['total']:,} · GPT {payload['gpt']['total']:,}")
    if prev and "claude" in prev and "gpt" in prev:
        print(f"since last update ({prev.get('updatedAt')}): Claude +{payload['claude']['total'] - prev['claude']['total']:,} · GPT +{payload['gpt']['total'] - prev['gpt']['total']:,}")


if __name__ == "__main__":
    main()
