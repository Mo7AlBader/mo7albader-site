"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";
import { trackClick } from "@/lib/track";

export default function CopyButton({
  text,
  event,
  className = "",
  labelAr = "انسخ",
  labelEn = "Copy",
}: {
  text: string;
  event: string;
  className?: string;
  labelAr?: string;
  labelEn?: string;
}) {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      trackClick(event);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the text stays selectable on the page */
    }
  }

  return (
    <button
      onClick={copy}
      className={
        className ||
        "inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity hover:opacity-90"
      }
      aria-live="polite"
    >
      {copied ? (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="m4 12 5 5L20 6" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" aria-hidden>
          <rect x="9" y="9" width="12" height="12" rx="2" />
          <path d="M5 15V5a2 2 0 0 1 2-2h10" />
        </svg>
      )}
      {copied ? (lang === "ar" ? "تم النسخ" : "Copied") : lang === "ar" ? labelAr : labelEn}
    </button>
  );
}
