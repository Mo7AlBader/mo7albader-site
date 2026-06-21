"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Partners() {
  const { lang } = useLang();
  const p = content.partners;

  return (
    <section id="partners" className="container py-10 md:py-12">
      <Reveal y={0}>
        <p className="eyebrow justify-center text-center" style={{ display: "flex" }}>
          {p.eyebrow[lang]}
        </p>
        <h2 className="font-display mt-3 text-center text-2xl font-bold tracking-tight md:text-3xl">
          {p.title[lang]}
        </h2>
      </Reveal>

      {/* compact one-row logo wall — seamless infinite loop, white tiles so every logo reads */}
      <Reveal delay={0.1} y={16}>
        <div className="logos-marquee mt-7" aria-hidden>
          <div className="logos-track logos-track--rev">
            {[...p.logos, ...p.logos].map((logo, i) => (
              <span
                key={i}
                className="me-3 grid h-14 w-[124px] shrink-0 place-items-center rounded-xl bg-white px-4"
                title={logo.name}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={logo.src} alt={logo.name} className="max-h-8 max-w-full object-contain" />
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
