"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

// +1% for every 2 full months elapsed since baselineDate, capped at 100%
function computeProgress(baselineDate: string, baselineProgress: number) {
  const [y, m] = baselineDate.split("-").map(Number);
  const now = new Date();
  const monthsElapsed = (now.getFullYear() - y) * 12 + (now.getMonth() - (m - 1));
  const grown = baselineProgress + Math.max(0, Math.floor(monthsElapsed / 2));
  return Math.min(100, grown);
}

export default function Goal2028() {
  const { lang } = useLang();
  const g = content.goal;
  const pct = computeProgress(g.baselineDate, g.baselineProgress);

  return (
    <section id="goal" className="container py-12 md:py-14">
      <Reveal y={28}>
        <div className="group relative overflow-hidden rounded-[28px] border border-line">
          {/* real Range Rover image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={g.image}
            alt="Range Rover"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* legibility gradients */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.93) 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{ background: "radial-gradient(130% 80% at 88% 0%, rgba(243,80,15,0.28), transparent 55%)" }}
          />

          {/* content */}
          <div className="relative flex min-h-[320px] flex-col justify-end p-6 md:min-h-[380px] md:p-9">
            <p className="eyebrow">{g.eyebrow[lang]}</p>
            <div className="mt-4 flex flex-wrap items-end gap-3">
              <h2 className="font-display text-4xl font-bold leading-none tracking-tight md:text-6xl">{g.title[lang]}</h2>
              <span className="mb-1 rounded-full border border-line bg-black/40 px-3 py-1 font-display text-sm tabular-nums text-white/85 backdrop-blur">
                {g.year}
              </span>
            </div>
            <p className="mt-4 max-w-md leading-relaxed text-white/75">{g.note[lang]}</p>

            {/* progress */}
            <div className="mt-8 max-w-md">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="text-white/70">{g.progressLabel[lang]}</span>
                <span className="font-display text-base font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                  {pct}%
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full border border-white/10 bg-black/40">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                    boxShadow: "0 0 18px rgba(243,80,15,0.6)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
