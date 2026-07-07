"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function About() {
  const { lang } = useLang();
  const a = content.about;

  return (
    <section id="about" className="container py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{a.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-2xl md:text-4xl font-bold tracking-tight">
          {a.title[lang]}
        </h2>
      </Reveal>

      <div className="mt-6 max-w-2xl space-y-4">
        {a.paragraphs.map((p, i) => (
          <Reveal key={i} delay={0.08 + i * 0.08} y={20}>
            <p className="text-base leading-relaxed text-white/80">{p[lang]}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.24} y={16}>
        <div className="mt-8 flex flex-wrap gap-2.5">
          {a.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80"
            >
              {t}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
