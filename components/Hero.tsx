"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";
import HeroBackground from "./HeroBackground";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18.9 2H22l-7.64 8.73L23 22h-6.8l-5.02-6.56L5.4 22H2.3l8.17-9.34L1.5 2h6.97l4.54 6 5.89-6Zm-1.19 18h1.71L7.39 3.9H5.55L17.71 20Z" />
      </svg>
    );
  }
  // Email / fallback
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Hero() {
  const { lang } = useLang();
  const h = content.hero;
  const socials = content.contact.links;

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-16 md:py-20"
    >
      <HeroBackground />

      <div className="container relative">
        {/* status row */}
        <Reveal y={0} x={lang === "ar" ? 24 : -24}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="pill">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--mint)" }} />
              {h.available[lang]}
            </span>
            <span className="text-sm text-muted">{h.location[lang]}</span>
          </div>
        </Reveal>

        {/* portrait card + cursive signature (placeholder until photo is added) */}
        <Reveal delay={0.08} y={28}>
          <div
            className="relative mx-auto mt-8 w-full max-w-[350px] overflow-hidden rounded-[28px] border border-line"
            style={{ aspectRatio: "436 / 460" }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(120% 95% at 50% 8%, #ff7a3d 0%, var(--accent) 28%, #7d1f06 62%, #160a05 100%)",
              }}
            />
            {/* silhouette stands in for the portrait photo */}
            <svg
              viewBox="0 0 200 220"
              preserveAspectRatio="xMidYMax meet"
              className="absolute inset-x-0 bottom-0 mx-auto h-[82%]"
              aria-hidden
            >
              <g fill="rgba(0,0,0,0.30)">
                <circle cx="100" cy="72" r="44" />
                <path d="M16 220c0-48 37.6-82 84-82s84 34 84 82Z" />
              </g>
            </svg>
            {/* top vignette for depth */}
            <div
              className="absolute inset-0"
              style={{
                background: "radial-gradient(100% 80% at 50% 0%, transparent 50%, rgba(0,0,0,0.5) 100%)",
              }}
            />
            {/* signature */}
            <span
              dir="ltr"
              className="signature absolute bottom-1 text-[68px] text-white ltr:left-4 rtl:right-4 md:text-[88px]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              Mohammed
            </span>
          </div>
        </Reveal>

        {/* greeting + line */}
        <Reveal delay={0.16} y={24}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xl leading-relaxed text-muted md:text-2xl">
            {h.greeting[lang]} <span className="text-white">{h.line[lang]}</span>
          </p>
        </Reveal>

        {/* socials */}
        <Reveal delay={0.2} y={16}>
          <div className="mt-6 flex items-center justify-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.03]
                           text-white/80 transition-colors hover:border-accent hover:text-white"
              >
                <SocialIcon label={s.label} />
              </a>
            ))}
          </div>
        </Reveal>

        {/* dual CTAs */}
        <Reveal delay={0.26} y={20}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={h.ctaHref}
              className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3.5
                         font-medium text-white transition-colors hover:bg-accent2"
            >
              {h.cta[lang]}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90"
              >
                <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={h.workHref}
              className="inline-flex items-center rounded-full border border-line bg-white/[0.03] px-6 py-3.5
                         font-medium text-white/90 transition-colors hover:border-accent hover:text-white"
            >
              {h.work[lang]}
            </a>
          </div>
        </Reveal>

        {/* proof strip — credibility above the fold (CRO P6/P7) */}
        <Reveal delay={0.32} y={14}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            {h.proof.map((p, i) => (
              <span key={i} className="inline-flex items-baseline gap-1.5">
                <span className="font-display font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                  {p.value}
                </span>
                <span className="text-muted">{p[lang]}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
