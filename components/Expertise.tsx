"use client";

import { useState } from "react";
import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

// one minimal icon per area (strategy, growth, content, build)
const icons = [
  "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
  "M3 17l6-6 4 4 8-8M15 7h6v6",
  "M6 3h9l4 4v14H6zM9 9h6M9 13h6M9 17h4",
  "M13 2 4 14h6l-1 8 9-12h-6z",
];

export default function Expertise() {
  const { lang } = useLang();
  const e = content.expertise;
  const [open, setOpen] = useState(0);

  return (
    <section id="expertise" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{e.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{e.title[lang]}</h2>
      </Reveal>

      <div className="mt-7 flex flex-col gap-2.5">
        {e.areas.map((area, i) => {
          const active = open === i;
          return (
            <Reveal key={i} delay={i * 0.06} y={20}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={active}
                className="card w-full p-5 text-start transition-colors md:p-6"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all"
                    style={{
                      background: active
                        ? "linear-gradient(135deg, #000 0%, #8a2d09 50%, var(--accent) 100%)"
                        : "rgba(255,255,255,0.04)",
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5"
                      fill="none"
                      stroke={active ? "#fff" : "var(--faint)"}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d={icons[i % icons.length]} />
                    </svg>
                  </span>
                  <h3
                    className="font-display text-xl font-bold tracking-tight transition-colors md:text-2xl"
                    style={{ color: active ? "var(--white)" : "rgba(255,255,255,0.4)" }}
                  >
                    {area[lang]}
                  </h3>
                  <span
                    className="ms-auto font-display text-sm font-bold tabular-nums"
                    style={{ color: active ? "var(--accent)" : "rgba(255,255,255,0.3)" }}
                  >
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                </div>
                {active && (
                  <p className="mt-4 leading-relaxed text-muted ltr:pl-16 rtl:pr-16">
                    {lang === "ar" ? area.arDesc : area.enDesc}
                  </p>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
