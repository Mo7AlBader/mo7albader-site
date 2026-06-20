"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Contact() {
  const { lang } = useLang();
  const c = content.contact;

  return (
    <section id="contact" className="container py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{c.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          {c.title[lang]}
        </h2>
        <p className="mt-3 max-w-md text-muted leading-relaxed">{c.note[lang]}</p>
      </Reveal>

      <Reveal delay={0.1} y={20}>
        <div className="mt-8 flex flex-wrap gap-3">
          {c.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener"
              className="rounded-full border border-line bg-white/[0.03] px-5 py-2.5
                         text-white/90 hover:border-accent hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </Reveal>

      <footer className="mt-24 pt-8 border-t border-line text-sm text-faint">
        © {new Date().getFullYear()} — {content.footer[lang]}
      </footer>
    </section>
  );
}
