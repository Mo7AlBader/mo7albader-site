"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function Stats() {
  const { lang } = useLang();
  const s = content.stats;

  return (
    <section id="stats" className="container py-16">
      <Reveal y={24}>
        <div className="card grid grid-cols-2 md:grid-cols-4 divide-x divide-line rtl:divide-x-reverse">
          {s.items.map((item, i) => (
            <div key={i} className="p-6 md:p-8 text-center">
              <CountUp
                value={item.value}
                className="font-display block text-4xl md:text-5xl font-bold tracking-tight tabular-nums"
              />
              <p className="mt-2 text-sm text-muted leading-snug">{item[lang]}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
