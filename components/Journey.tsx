"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Journey() {
  const { lang } = useLang();
  const j = content.journey;

  return (
    <section id="journey" className="container py-20 md:py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{j.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">{j.title[lang]}</h2>
      </Reveal>

      <div className="mt-10">
        {j.milestones.map((m, i) => {
          const hl = "highlight" in m && m.highlight;
          return (
            <Reveal key={i} delay={i * 0.05} x={lang === "ar" ? 24 : -24} y={0}>
              <div className="flex items-center justify-between gap-4 border-b border-line py-5">
                <span
                  className="font-display text-xl font-bold tracking-tight md:text-3xl"
                  style={{ color: hl ? "var(--accent)" : "var(--white)" }}
                >
                  {m[lang]}
                </span>
                <span
                  className="shrink-0 rounded-full border px-4 py-1.5 font-display text-sm tabular-nums"
                  style={{
                    borderColor: hl ? "var(--accent)" : "var(--line)",
                    color: hl ? "var(--accent)" : "var(--muted)",
                    background: hl ? "transparent" : "rgba(255,255,255,0.03)",
                  }}
                >
                  {m.year}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
