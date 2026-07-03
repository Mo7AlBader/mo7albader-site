"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";
import LogoImg from "./LogoImg";

const MONTHS = {
  ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
} as const;

function parseYM(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  return { y, m: m - 1 };
}

function fmtMonth(ym: string, lang: "ar" | "en") {
  const { y, m } = parseYM(ym);
  return `${MONTHS[lang][m]} ${y}`;
}

// duration from start -> (end || today), formatted as "كم سنة"
function durationLabel(start: string, end: string | null, lang: "ar" | "en") {
  const s = parseYM(start);
  const now = new Date();
  const endY = end ? parseYM(end).y : now.getFullYear();
  const endM = end ? parseYM(end).m : now.getMonth();
  let months = (endY - s.y) * 12 + (endM - s.m);
  if (months < 1) months = 1;
  const y = Math.floor(months / 12);
  const m = months % 12;

  if (lang === "en") {
    if (y < 1) return `${m} mo${m > 1 ? "s" : ""}`;
    return `${y} yr${y > 1 ? "s" : ""}${m ? ` ${m} mo` : ""}`;
  }
  if (y < 1) return `${m} ${m === 1 ? "شهر" : m === 2 ? "شهران" : "أشهر"}`;
  const yw = y === 1 ? "سنة" : y === 2 ? "سنتان" : y <= 10 ? `${y} سنوات` : `${y} سنة`;
  if (!m) return yw;
  const mw = m === 1 ? "شهر" : m === 2 ? "شهران" : "أشهر";
  return `${yw} و${m} ${mw}`;
}

function StoreBadge({ kind }: { kind: "apple" | "google" }) {
  const label = kind === "apple" ? "App Store" : "Google Play";
  return (
    <span
      className="grid h-7 w-7 place-items-center rounded-md border border-line bg-white/[0.04] text-white/80"
      title={label}
      aria-label={label}
    >
      {kind === "apple" ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M17.05 12.04c-.03-2.7 2.2-3.99 2.3-4.05-1.25-1.84-3.2-2.09-3.89-2.12-1.66-.17-3.23.97-4.07.97-.83 0-2.12-.95-3.49-.92-1.8.03-3.46 1.04-4.38 2.65-1.87 3.24-.48 8.04 1.34 10.68.89 1.29 1.95 2.74 3.34 2.69 1.34-.05 1.85-.86 3.47-.86 1.62 0 2.08.86 3.49.83 1.44-.02 2.35-1.31 3.23-2.61.68-1 .96-1.51 1.5-2.65-3.93-1.49-3.62-5.31-3.65-5.33zM14.6 4.04c.74-.9 1.24-2.14 1.1-3.39-1.07.04-2.36.71-3.13 1.61-.69.79-1.29 2.06-1.13 3.27 1.19.09 2.42-.6 3.16-1.49z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
          <path d="M3.6 1.81a1 1 0 0 0-.6.92v18.54a1 1 0 0 0 .6.92L13.79 12 3.6 1.81zm11.6 8.79 2.3 2.3-9.71 5.6 7.41-7.9zm-7.4-7.9 9.7 5.6-2.29 2.3-7.41-7.9zM18.7 9.6l2.2 1.27c.7.4.7 1.46 0 1.86L18.7 14l-2.45-2.4L18.7 9.6z" />
        </svg>
      )}
    </span>
  );
}

export default function Journey() {
  const { lang } = useLang();
  const j = content.journey;
  const present = lang === "ar" ? "مستمر" : "Present";

  return (
    <section id="journey" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{j.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{j.title[lang]}</h2>
      </Reveal>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {j.roles.map((r, i) => {
          const featured = i === 0;
          const ongoing = !r.end;
          const startLabel = fmtMonth(r.start, lang);
          const endLabel = r.end ? fmtMonth(r.end, lang) : present;
          const arrow = lang === "ar" ? "←" : "→";
          const dur = durationLabel(r.start, r.end, lang);
          return (
            <Reveal key={i} delay={i * 0.06} y={28} className={featured ? "sm:col-span-2" : ""}>
              <div className="card h-full p-5">
                {/* logo + company + period */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-7 w-7 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1">
                      {(r.logo as string | null) ? (
                        <LogoImg
                          src={r.logo as string}
                          alt={r.company[lang]}
                          fallbackText={r.company.en}
                          fallbackClassName="font-display text-sm font-bold text-black"
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="font-display text-sm font-bold text-black">{r.company.en.slice(0, 1)}</span>
                      )}
                    </span>
                    <span className="flex items-center gap-2 font-display text-lg font-bold" style={{ color: "var(--accent)" }}>
                      {ongoing && <span className="h-2 w-2 rounded-full" style={{ background: "var(--mint)" }} />}
                      {r.company[lang]}
                    </span>
                  </div>
                  <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs text-muted tabular-nums">
                    <bdi>{startLabel}</bdi>
                    <span aria-hidden>{arrow}</span>
                    <bdi>{endLabel}</bdi>
                  </span>
                </div>

                {/* job title */}
                <h3 className="font-display mt-3 text-xl font-bold tracking-tight md:text-2xl">{r.title[lang]}</h3>

                {/* years of experience + impact + store badges */}
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1 text-sm text-white/85">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                    {dur}
                  </span>
                  {r.impact && <span className="text-sm text-white/85">{r.impact[lang]}</span>}
                  {r.stores && (
                    <span className="flex items-center gap-1.5">
                      <StoreBadge kind="apple" />
                      <StoreBadge kind="google" />
                    </span>
                  )}
                </div>

                {/* simple description */}
                <p className="mt-4 leading-relaxed text-muted">{r[lang]}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
