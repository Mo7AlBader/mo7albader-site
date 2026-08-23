"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { blogUI } from "@/lib/blog";

/* Top bar for the blog. The homepage sidebar navigates between page sections,
   which does not apply here, so the blog gets its own compact header. */
export default function BlogNav() {
  const { lang } = useLang();
  const { toggle } = useLang();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-[1120px] items-center gap-4 px-5 md:px-8">
        <Link href="/" className="font-display text-lg font-bold tracking-tight hover:text-accent">
          {blogUI.brand[lang]}
        </Link>

        <span className="hidden h-4 w-px bg-line sm:block" />

        <Link
          href="/blog"
          className="hidden text-sm text-muted transition-colors hover:text-white sm:block"
        >
          {blogUI.blog[lang]}
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
            {blogUI.ctaButton[lang]}
          </Link>
        </div>
      </div>
    </header>
  );
}
