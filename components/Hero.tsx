"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Hero() {
  const { lang } = useLang();
  const h = content.hero;

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center container py-28">
      {/* status row */}
      <Reveal y={0} x={lang === "ar" ? 30 : -30}>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3 py-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: "var(--mint)" }} />
            <span className="text-muted">{h.available[lang]}</span>
          </span>
          <span className="text-muted">·</span>
          <span className="text-muted">{h.location[lang]}</span>
        </div>
      </Reveal>

      {/* headline */}
      <Reveal delay={0.08} y={28}>
        <h1 className="font-display mt-8 text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
          {h.greeting[lang]}
        </h1>
      </Reveal>

      <Reveal delay={0.16} y={28}>
        <p className="mt-4 max-w-xl text-lg md:text-2xl text-muted leading-relaxed">
          {h.line[lang]}
        </p>
      </Reveal>

      {/* cta */}
      <Reveal delay={0.24} y={20}>
        <a
          href={h.ctaHref}
          className="group mt-10 inline-flex items-center gap-3 self-start rounded-full
                     bg-accent px-6 py-3.5 font-medium text-white hover:bg-accent2 transition-colors"
        >
          {h.cta[lang]}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor"
               strokeWidth="2" className="rtl:rotate-90 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </Reveal>
    </section>
  );
}
