"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";
import { trackClick } from "@/lib/track";
import { OPEN_CAL_MODAL_EVENT } from "./Footer";

export default function Contact() {
  const { lang } = useLang();
  const c = content.contact;

  return (
    <section id="contact" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{c.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">{c.title[lang]}</h2>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{c.note[lang]}</p>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <div className="mt-8 flex flex-wrap gap-3">
          {/* primary action: booking a call converts directly, ahead of outbound links */}
          <button
            type="button"
            onClick={() => {
              trackClick("contact_cta_book_call");
              window.dispatchEvent(new Event(OPEN_CAL_MODAL_EVENT));
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-white transition-colors hover:bg-accent2"
          >
            {lang === "ar" ? "احجز مكالمة" : "Book a call"}
            <svg
              width="15"
              height="15"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90"
            >
              <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {c.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              onClick={() => trackClick("contact_link_click", { label: l.label })}
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-6 py-3.5 font-medium text-white/90 transition-colors hover:border-accent hover:text-white"
            >
              {l.label}
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-90"
              >
                <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
