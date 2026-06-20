"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Journey() {
  const { lang } = useLang();
  const j = content.journey;

  return (
    <section id="journey" className="container py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{j.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          {j.title[lang]}
        </h2>
      </Reveal>

      <ol className="mt-12 relative ltr:pl-6 rtl:pr-6">
        {/* vertical line */}
        <span className="absolute top-2 bottom-2 ltr:left-[3px] rtl:right-[3px] w-px bg-line" aria-hidden />
        {j.milestones.map((m, i) => {
          const hl = "highlight" in m && m.highlight;
          return (
            <Reveal key={i} delay={i * 0.06} x={lang === "ar" ? 24 : -24} y={0}>
              <li className="relative ltr:pl-8 rtl:pr-8 pb-9 last:pb-0">
                <span
                  className="absolute top-1 ltr:-left-[3px] rtl:-right-[3px] w-2.5 h-2.5 rounded-full"
                  style={{ background: hl ? "var(--accent)" : "var(--faint)" }}
                  aria-hidden
                />
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display text-xl font-bold tabular-nums"
                    style={{ color: hl ? "var(--accent)" : "var(--white)" }}
                  >
                    {m.year}
                  </span>
                </div>
                <p className="mt-1 text-muted">{m[lang]}</p>
              </li>
            </Reveal>
          );
        })}
      </ol>
    </section>
  );
}
