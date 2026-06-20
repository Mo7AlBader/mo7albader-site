"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Partners() {
  const { lang } = useLang();
  const p = content.partners;

  return (
    <section id="partners" className="container py-16 md:py-20">
      <Reveal y={0}>
        <p className="eyebrow justify-center text-center" style={{ display: "flex" }}>
          {p.eyebrow[lang]}
        </p>
        <h2 className="font-display mt-4 text-center text-2xl font-bold tracking-tight md:text-3xl">
          {p.title[lang]}
        </h2>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {p.logos.map((logo) => (
            <span
              key={logo.name}
              className="grid h-14 w-32 place-items-center rounded-2xl border border-line bg-white/[0.03] px-4 transition-colors hover:border-accent/50"
              title={logo.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-7 max-w-full object-contain opacity-80"
              />
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
