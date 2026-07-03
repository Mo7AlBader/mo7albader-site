"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function WorkProcess() {
  const { lang } = useLang();
  const p = content.process;

  return (
    <section id="process" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{p.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{p.title[lang]}</h2>
      </Reveal>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {p.steps.map((s, i) => (
          <Reveal key={i} delay={i * 0.06} y={24}>
            <div className="card flex h-full items-start gap-4 p-5">
              <span
                className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line font-display text-lg font-bold tabular-nums"
                style={{ color: "var(--accent)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl font-bold tracking-tight">{s[lang]}</h3>
                <p className="mt-2 leading-relaxed text-muted">{lang === "ar" ? s.arDesc : s.enDesc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
