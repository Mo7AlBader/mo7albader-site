"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function FAQ() {
  const { lang } = useLang();
  const f = content.faq;
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{f.eyebrow[lang]}</p>
      </Reveal>

      <div className="mt-6 flex flex-col gap-2.5">
        {f.items.map((item, i) => {
          const active = open === i;
          return (
            <Reveal key={i} delay={i * 0.05} y={16}>
              <div className="card overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(active ? -1 : i)}
                  aria-expanded={active}
                  className="flex w-full items-center justify-between gap-4 p-6 text-start"
                >
                  <span className="font-display text-base font-bold md:text-lg">{item.q[lang]}</span>
                  <span
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-white/80 transition-transform duration-300"
                    style={{ transform: active ? "rotate(180deg)" : "none" }}
                  >
                    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                      {active ? (
                        <path d="M3 8h10" strokeLinecap="round" />
                      ) : (
                        <path d="M8 3v10M3 8h10" strokeLinecap="round" />
                      )}
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {active && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.44, 0, 0.56, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="-mt-1 px-6 pb-6 leading-relaxed text-muted">{item.a[lang]}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.1} y={16}>
        <p className="mt-8 text-center text-muted">
          {lang === "ar" ? "عندك سؤال ثاني؟ " : "Got another question? "}
          <a href="#contact" className="text-white underline decoration-accent underline-offset-4 transition-colors hover:text-accent">
            {lang === "ar" ? "اسألني مباشرة" : "Ask me directly"}
          </a>
        </p>
      </Reveal>
    </section>
  );
}
