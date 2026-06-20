"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";

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
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export default function Footer() {
  const { lang } = useLang();
  const socials = content.contact.links;

  return (
    <footer className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
        style={{ background: "radial-gradient(80% 100% at 50% 100%, rgba(243,80,15,0.18), transparent 70%)" }}
      />
      <div className="container relative py-16 text-center md:py-20">
        <p className="eyebrow" style={{ display: "inline-flex" }}>
          {lang === "ar" ? "تواصل" : "Get in touch"}
        </p>

        <a href="#contact" className="group mt-6 flex items-center justify-center gap-4">
          <span className="h-2.5 w-2.5 rounded-full bg-white transition-colors group-hover:bg-accent" />
          <span className="font-display text-5xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-7xl">
            {lang === "ar" ? "احجز مكالمة" : "Book a call"}
          </span>
        </a>

        {/* profile chip */}
        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-line bg-white/[0.03] p-1.5 pe-5">
          <span
            className="grid h-10 w-10 place-items-center rounded-full font-display font-bold text-white"
            style={{ background: "linear-gradient(135deg, #000 0%, #8a2d09 55%, var(--accent) 100%)" }}
          >
            M
          </span>
          <div className="text-start">
            <p className="font-display font-bold leading-tight">{content.meta.name[lang]}</p>
            <p className="text-xs text-muted">{content.meta.role[lang]}</p>
          </div>
        </div>

        {/* socials */}
        <div className="mt-8 flex items-center justify-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.03] text-white/80 transition-colors hover:border-accent hover:text-white"
            >
              <SocialIcon label={s.label} />
            </a>
          ))}
        </div>

        <p className="mt-10 text-sm text-faint">
          © {new Date().getFullYear()} · {content.footer[lang]}
        </p>
      </div>
    </footer>
  );
}
