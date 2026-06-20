"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Projects() {
  const { lang } = useLang();
  const p = content.projects;

  return (
    <section id="projects" className="container py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{p.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          {p.title[lang]}
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {p.items.map((item, i) => {
          const href = "href" in item ? (item.href as string) : undefined;
          const Wrapper = href ? "a" : "div";
          return (
            <Reveal key={i} delay={i * 0.07} y={28}>
              <Wrapper
                {...(href ? { href, target: "_blank", rel: "noopener" } : {})}
                className="card group block h-full p-7 transition-colors hover:border-accent/60"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-2xl font-bold tracking-tight">{item.name}</h3>
                  {href && (
                    <svg
                      width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor"
                      strokeWidth="2"
                      className="mt-1 shrink-0 text-muted transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
                <p className="mt-3 text-muted leading-relaxed">{item[lang]}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-line px-2.5 py-1 text-xs text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
