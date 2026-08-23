"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { content } from "@/lib/data";

export default function PageFooter() {
  const { lang } = useLang();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1120px] px-5 py-12 md:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-lg font-bold tracking-tight">{content.meta.name[lang]}</p>
            <p className="mt-1 text-sm text-muted">{content.meta.role[lang]}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {content.contact.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <Link
              href="/"
              className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
            >
              {lang === "ar" ? "رجوع للموقع" : "Back to site"}
            </Link>
          </div>
        </div>

        <p className="mt-10 text-sm text-faint">© {new Date().getFullYear()} · mo7albader.com</p>
      </div>
    </footer>
  );
}
