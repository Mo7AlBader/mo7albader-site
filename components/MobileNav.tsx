"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/data";
import { useLang } from "./LangContext";

export const MOBILE_NAV_TOGGLE_EVENT = "mobile-nav-toggle";

export default function MobileNav() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  // lock body scroll while the drawer is open + notify other floating UI (MobileCTA)
  useEffect(() => {
    window.dispatchEvent(new CustomEvent(MOBILE_NAV_TOGGLE_EVENT, { detail: open }));
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* floating button */}
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="fixed top-5 ltr:right-4 rtl:left-4 z-[60] grid place-items-center
                   w-12 h-12 rounded-full bg-white text-bg shadow-lg"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
             strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
        </svg>
      </button>

      {/* overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      {/* drawer */}
      <aside
        className={`fixed top-0 ltr:right-0 rtl:left-0 z-50 h-screen w-[83%] max-w-sm
                    bg-surface2 border-line ltr:border-l rtl:border-r
                    transition-transform duration-300 [transition-timing-function:var(--ease)]
                    ${open ? "translate-x-0" : "ltr:translate-x-full rtl:-translate-x-full"}`}
      >
        <div className="flex flex-col gap-1 p-6 pt-24">
          {content.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="font-display text-2xl py-3 border-b border-line text-white/90 hover:text-white"
            >
              {item[lang]}
            </a>
          ))}

          <button
            onClick={toggle}
            className="mt-6 self-start rounded-full border border-line px-4 py-2 text-sm text-muted hover:text-white"
          >
            {lang === "ar" ? "English" : "عربي"}
          </button>
        </div>
      </aside>
    </div>
  );
}
