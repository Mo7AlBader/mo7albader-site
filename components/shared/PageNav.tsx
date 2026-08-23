"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { content } from "@/lib/data";
import type { Bi } from "@/lib/i18n";

/* Top bar for the standalone sections (blog, prompts). The homepage sidebar
   navigates between page sections, which does not apply once you leave it. */
export default function PageNav({ section }: { section: { label: Bi; href: string } }) {
  const { lang, toggle } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center gap-4 px-5 md:px-8">
        <Link href="/" className="font-display text-lg font-bold tracking-tight hover:text-accent">
          {content.meta.name[lang]}
        </Link>

        <span className="hidden h-4 w-px bg-line sm:block" />

        <Link href={section.href} className="hidden text-sm text-muted transition-colors hover:text-white sm:block">
          {section.label[lang]}
        </Link>

        <div className="ms-auto flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Switch language"
            className="rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-xs text-muted transition-colors hover:text-white"
          >
            {lang === "ar" ? "EN" : "عربي"}
          </button>
          <Link
            href="/#contact"
            className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-black transition-opacity hover:opacity-90"
          >
            {lang === "ar" ? "تواصل معي" : "Get in touch"}
          </Link>
        </div>
      </div>
    </header>
  );
}
