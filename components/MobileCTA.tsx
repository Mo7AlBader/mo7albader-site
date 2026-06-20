"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";

/**
 * Sticky bottom contact CTA on mobile (CRO: conversion always one tap away).
 * Hidden on desktop where the sidebar + hero CTAs already cover it.
 */
export default function MobileCTA() {
  const { lang } = useLang();
  const h = content.hero;

  return (
    <a
      href={h.ctaHref}
      className="fixed bottom-4 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full
                 bg-accent px-7 py-3.5 font-medium text-white transition-transform active:scale-95 lg:hidden"
      style={{ boxShadow: "0 10px 30px rgba(243,80,15,0.45)" }}
    >
      {h.cta[lang]}
      <svg
        width="15"
        height="15"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="rtl:rotate-90"
      >
        <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
