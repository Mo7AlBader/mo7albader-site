"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";
import { blogUI, type Bi } from "@/lib/blog";

export default function FAQList({ items }: { items: { q: Bi; a: Bi }[] }) {
  const { lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mt-14 border-t border-line pt-10">
      <h2 className="font-display mb-6 text-2xl font-bold tracking-tight md:text-3xl">{blogUI.faqTitle[lang]}</h2>

      <div className="flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="overflow-hidden rounded-2xl border border-line bg-surface">
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-4 p-5 text-start"
              >
                <span className="flex-1 font-medium leading-snug text-white">{item.q[lang]}</span>
                <span
                  aria-hidden
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full border border-line text-accent transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-line px-5 py-4">
                  <p className="leading-[1.9] text-white/75">{item.a[lang]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
