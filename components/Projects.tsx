"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

// distinct-but-cohesive placeholder "covers" (swap for real screenshots later)
const covers = [
  "radial-gradient(90% 90% at 25% 15%, hsla(20,95%,55%,0.55), transparent 60%)",
  "radial-gradient(90% 90% at 25% 15%, hsla(162,80%,45%,0.45), transparent 60%)",
  "radial-gradient(90% 90% at 25% 15%, hsla(265,75%,60%,0.45), transparent 60%)",
  "radial-gradient(90% 90% at 25% 15%, hsla(205,85%,55%,0.45), transparent 60%)",
  "radial-gradient(90% 90% at 25% 15%, hsla(38,95%,55%,0.45), transparent 60%)",
];

export default function Projects() {
  const { lang } = useLang();
  const p = content.projects;

  return (
    <section id="projects" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{p.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{p.title[lang]}</h2>
      </Reveal>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        {p.items.map((item, i) => {
          const href = "href" in item ? (item.href as string) : undefined;
          const logo = "logo" in item ? (item.logo as string) : undefined;
          const cover = "cover" in item ? (item.cover as string) : undefined;
          const Wrapper = href ? "a" : "div";
          const featured = i === 0;
          return (
            <Reveal key={i} delay={i * 0.06} y={28} className={featured ? "sm:col-span-2" : ""}>
              <Wrapper
                {...(href ? { href, target: "_blank", rel: "noopener" } : {})}
                className={`group relative block w-full overflow-hidden rounded-[24px] border border-line transition-colors hover:border-accent/60 ${
                  featured ? "min-h-[220px]" : "min-h-[180px]"
                }`}
              >
                {/* cover: real screenshot when available, gradient otherwise */}
                {cover ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cover}
                      alt={`${item.name} preview`}
                      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* readability scrim */}
                    <div className="pointer-events-none absolute inset-0 bg-black/15" />
                  </>
                ) : (
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: `${covers[i % covers.length]}, #0c0c0c` }}
                  />
                )}
                {/* faint logo watermark only when there's no real cover */}
                {logo && !cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo}
                    alt=""
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-[42%] w-24 max-w-[38%] -translate-x-1/2 -translate-y-1/2 opacity-20"
                  />
                )}
                {/* category / date chip */}
                <span className="absolute top-4 rounded-full border border-line bg-black/40 px-3 py-1 text-xs text-white/80 backdrop-blur ltr:left-4 rtl:right-4">
                  {item.tags[item.tags.length - 1]}
                </span>
                {/* bottom panel */}
                <div
                  className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.85))" }}
                >
                  <div className="min-w-0">
                    <p className="text-sm text-muted">{item.tags[0]}</p>
                    <h3 className="font-display text-xl font-bold tracking-tight md:text-2xl">{item.name}</h3>
                    <p className="mt-1 line-clamp-2 max-w-md text-sm text-white/55">{item[lang]}</p>
                  </div>
                  {href && (
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line bg-white text-black transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 rtl:rotate-90">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </div>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
