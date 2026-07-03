"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Now() {
  const { lang } = useLang();
  const n = content.now;

  return (
    <section id="now" className="container py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{n.eyebrow[lang]}</p>
      </Reveal>

      <div className="mt-6 grid gap-2.5">
        {n.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} y={24}>
            <div className="card p-4 flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
              <p className="text-base leading-relaxed text-white/90">{item[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
