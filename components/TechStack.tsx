"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

function initials(name: string) {
  const letters = name.replace(/[^A-Za-z]/g, "");
  return letters.slice(0, 2);
}

export default function TechStack() {
  const { lang } = useLang();
  const t = content.techStack;

  return (
    <section id="stack" className="container py-20 md:py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{t.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">{t.title[lang]}</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {t.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.06} y={24}>
            <div className="card h-full p-6">
              <span
                className="grid h-12 w-12 place-items-center rounded-xl font-display text-lg font-bold uppercase text-white"
                style={{ background: "linear-gradient(135deg, #000 0%, #8a2d09 55%, var(--accent) 100%)" }}
              >
                {initials(item.name)}
              </span>
              <h3 className="font-display mt-5 text-xl font-bold tracking-tight">{item.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
