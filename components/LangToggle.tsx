"use client";

import { useLang } from "./LangContext";

export default function LangToggle() {
  const { lang, toggle } = useLang();
  return (
    <button
      onClick={toggle}
      className="hidden lg:block fixed top-6 ltr:left-6 rtl:right-6 z-50
                 rounded-full border border-line bg-white/5 backdrop-blur
                 px-4 py-2 text-sm text-muted hover:text-white transition-colors"
      aria-label="Switch language"
    >
      {lang === "ar" ? "EN" : "عربي"}
    </button>
  );
}
