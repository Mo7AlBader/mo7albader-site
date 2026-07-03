"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

const avatars = ["/logos/ameen.svg", "/logos/abdihqt.png", "/logos/salla.svg"];

function Star() {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="var(--accent)" aria-hidden>
      <path d="M8 1.2l1.9 4 4.3.5-3.2 2.9.9 4.3L8 11.7 4.1 13.8l.9-4.3L1.8 5.7l4.3-.5z" />
    </svg>
  );
}

function Globe() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18" />
    </svg>
  );
}

export default function Stats() {
  const { lang } = useLang();
  const s = content.stats;
  const items = s.items;
  const headline = [items[0], items[2]]; // most striking numbers

  return (
    <section id="stats" className="container py-10 md:py-12">
      {/* two headline cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {headline.map((item, i) => (
          <Reveal key={i} delay={i * 0.08} y={24}>
            <div className="card p-5 md:p-6">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
                <span className="text-sm text-muted">{item[lang]}</span>
              </div>
              <CountUp
                value={item.value}
                className="font-display mt-6 block text-5xl font-bold tracking-tight tabular-nums md:text-6xl"
              />
            </div>
          </Reveal>
        ))}
      </div>

      {/* social-proof bar */}
      <Reveal delay={0.16} y={24}>
        <div className="card mt-4 flex flex-col items-center justify-between gap-6 p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <div className="flex">
              {avatars.map((src, i) => (
                <span
                  key={src}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white p-1.5"
                  style={{ marginInlineStart: i === 0 ? 0 : -12, zIndex: avatars.length - i }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" className="max-h-full max-w-full object-contain" />
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="mt-1.5 text-sm text-muted">
                <span className="font-display font-bold text-white">{items[1].value}</span> {items[1][lang]}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-line px-3 py-1 text-xs text-white/70">
              <span className="font-display font-bold text-white">{items[3].value}</span> {items[3][lang]}
            </span>
            <span className="mx-1 hidden h-6 w-px bg-line sm:block" />
            <span className="text-sm text-muted">{s.ready[lang]}</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-line text-white/80">
              <Globe />
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
