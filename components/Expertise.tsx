"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Expertise() {
  const { lang } = useLang();
  const e = content.expertise;

  return (
    <section id="expertise" className="container py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{e.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          {e.title[lang]}
        </h2>
      </Reveal>

      <ol className="mt-10 grid sm:grid-cols-2 gap-4">
        {e.areas.map((area, i) => (
          <Reveal key={i} delay={i * 0.07} y={28}>
            <li className="flip h-full min-h-[200px]">
              <div className="flip__inner">
                {/* front — full info */}
                <div className="flip__face card h-full p-7">
                  <span
                    className="font-display text-sm font-bold tabular-nums"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-bold tracking-tight">
                    {area[lang]}
                  </h3>
                  <p className="mt-2 text-muted leading-relaxed">
                    {lang === "ar" ? area.arDesc : area.enDesc}
                  </p>
                </div>

                {/* back — orange flourish */}
                <div
                  className="flip__face flip__back card flex h-full flex-col justify-between p-7"
                  style={{ background: "var(--accent)", borderColor: "transparent" }}
                >
                  <span className="font-display text-sm font-bold tabular-nums text-black/70">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="font-display text-3xl font-bold leading-tight tracking-tight text-black">
                      {area[lang]}
                    </h3>
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" stroke="currentColor"
                         strokeWidth="2.2" className="shrink-0 text-black">
                      <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
