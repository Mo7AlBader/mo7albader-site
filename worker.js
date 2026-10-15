const NAME_RE = /^[a-z0-9_]{1,64}$/;
const LABEL_RE = /^[a-z0-9_]{1,64}$/i;

function sanitizeLabel(label) {
  if (typeof label !== "string") return null;
  const cleaned = label.toLowerCase().replace(/[^a-z0-9_]+/g, "_").slice(0, 64);
  return LABEL_RE.test(cleaned) ? cleaned : null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // the note briefly shipped under /notes/work-of-islam
    if (url.pathname.replace(/\/$/, "") === "/notes/work-of-islam") {
      url.pathname = "/notes/work-in-islam";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname === "/api/track" && request.method === "POST") {
      try {
        const { name, props } = await request.json();
        if (typeof name === "string" && NAME_RE.test(name)) {
          const label = sanitizeLabel(props && props.label);
          const key = label ? `count:${name}:${label}` : `count:${name}`;
          const current = parseInt((await env.ANALYTICS_KV.get(key)) || "0", 10);
          await env.ANALYTICS_KV.put(key, String(current + 1));
        }
      } catch {
        // ignore malformed beacons
      }
      return new Response(null, { status: 204 });
    }

    // token totals for /tokens, written to KV by scripts/tokens/update.py.
    // Projected to "now" here so the response never reveals when the snapshot was taken.
    if (url.pathname === "/api/tokens" && request.method === "GET") {
      const snap = await env.ANALYTICS_KV.get("tokens:latest", "json");
      if (!snap || !snap.claude || !snap.gpt) return new Response("Not Found", { status: 404 });
      const now = Date.now();
      const days = Math.max(0, now - (Date.parse(snap.updatedAt) || now)) / 864e5;
      const project = (s) => ({
        total: Math.round(s.total + s.perDay * days),
        perDay: s.perDay,
        stats: s.stats || null,
        heat: s.heat || null,
      });
      return Response.json(
        { at: new Date(now).toISOString(), claude: project(snap.claude), gpt: project(snap.gpt) },
        { headers: { "Cache-Control": "public, max-age=60", "Access-Control-Allow-Origin": "*" } }
      );
    }

    if (url.pathname === "/api/stats" && request.method === "GET") {
      const auth = (request.headers.get("Authorization") || "").trim();
      const expected = `Bearer ${(env.STATS_TOKEN || "").trim()}`;
      if (!env.STATS_TOKEN || auth !== expected) {
        return new Response("Unauthorized", { status: 401 });
      }
      const counts = {};
      const list = await env.ANALYTICS_KV.list({ prefix: "count:" });
      for (const { name: key } of list.keys) {
        counts[key.slice("count:".length)] = parseInt((await env.ANALYTICS_KV.get(key)) || "0", 10);
      }
      return Response.json(counts);
    }

    return env.ASSETS.fetch(request);
  },
};
