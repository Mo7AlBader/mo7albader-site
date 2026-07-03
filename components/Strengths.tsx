"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Strengths() {
  const { lang } = useLang();
  const s = content.strengths;
  const dom = s.domains;

  return (
    <section id="strengths" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{s.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{s.title[lang]}</h2>
        <p className="mt-3 text-sm text-faint">{s.source[lang]}</p>
      </Reveal>

      {/* top 5 — prominent cards */}
      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {s.top5.map((t, i) => {
          const d = dom[t.domain];
          const featured = i === 0;
          return (
            <Reveal key={i} delay={i * 0.06} y={28} className={featured ? "sm:col-span-2" : ""}>
              <div className="card group relative h-full overflow-hidden p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: d.color }} />
                    <span className="text-xs uppercase tracking-wide" style={{ color: d.color }}>
                      {d[lang]}
                    </span>
                  </div>
                  <span className="font-display text-2xl font-bold tabular-nums text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display mt-4 text-xl font-bold tracking-tight md:text-2xl">{t.name}</h3>
                <p className="mt-2 leading-relaxed text-muted">{t[lang]}</p>
                {/* soft domain-colored glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-12 h-32 w-32 rounded-full blur-3xl ltr:-right-12 rtl:-left-12"
                  style={{ background: d.color, opacity: 0.12 }}
                />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* 6–10 — present but understated */}
      <Reveal delay={0.1} y={16}>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="text-sm text-faint ltr:mr-1 rtl:ml-1">{s.moreLabel[lang]}:</span>
          {s.more.map((m) => {
            const d = dom[m.domain];
            return (
              <span
                key={m.rank}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-muted"
              >
                <span className="font-display tabular-nums text-white/40">{m.rank}</span>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: d.color }} />
                {m.name}
              </span>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
