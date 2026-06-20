"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Goal2028() {
  const { lang } = useLang();
  const g = content.goal;

  const total = g.steps.length;
  const done = g.steps.filter((s) => s.done).length;
  const pct = Math.round((done / total) * 100);

  return (
    <section id="goal" className="container py-24">
      <Reveal y={28}>
        <div
          className="card relative overflow-hidden p-8 md:p-12"
          style={{
            background:
              "linear-gradient(150deg, var(--surface) 0%, var(--surface) 55%, rgba(99,102,241,0.12) 130%)",
          }}
        >
          {/* eyebrow + title */}
          <p className="eyebrow">{g.eyebrow[lang]}</p>
          <div className="mt-4 flex items-center gap-3">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              {g.title[lang]}
            </h2>
            <span aria-hidden className="text-3xl md:text-5xl">🚗</span>
          </div>
          <p className="mt-3 max-w-md text-muted leading-relaxed">{g.note[lang]}</p>

          {/* progress */}
          <div className="mt-10">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-muted">{g.progressLabel[lang]}</span>
              <span className="font-display font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                {pct}%
              </span>
            </div>
            <div className="h-2.5 rounded-full overflow-hidden bg-white/[0.06]">
              <div
                className="h-full rounded-full transition-[width] duration-700"
                style={{
                  width: `${pct}%`,
                  background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                }}
              />
            </div>
          </div>

          {/* career ladder */}
          <ol className="mt-8 grid sm:grid-cols-3 gap-3">
            {g.steps.map((s, i) => {
              const target = "target" in s && s.target;
              return (
                <li
                  key={i}
                  className="rounded-2xl border p-4"
                  style={{
                    borderColor: s.done ? "var(--accent)" : "var(--line)",
                    background: target ? "rgba(99,102,241,0.06)" : "transparent",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg font-bold tabular-nums">{s.year}</span>
                    <span
                      aria-hidden
                      className="grid place-items-center w-5 h-5 rounded-full text-[11px]"
                      style={{
                        background: s.done ? "var(--accent)" : "transparent",
                        border: s.done ? "none" : "1px solid var(--line)",
                        color: "#fff",
                      }}
                    >
                      {s.done ? "✓" : ""}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted">{s[lang]}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
