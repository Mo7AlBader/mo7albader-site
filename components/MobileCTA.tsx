"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/data";
import { useLang } from "./LangContext";

/**
 * Sticky mobile contact CTA.
 * Hidden at the top (hero already has CTAs); appears after the user scrolls
 * past the hero; disappears once the contact section / footer is reached.
 */
export default function MobileCTA() {
  const { lang } = useLang();
  const h = content.hero;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let pastHero = false;
    let contactInView = false;
    const sync = () => setVisible(pastHero && !contactInView);

    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.7;
      sync();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // hide the floating CTA once the contact section (and footer below it) is in view
    const contact = document.getElementById("contact");
    let io: IntersectionObserver | undefined;
    if (contact) {
      io = new IntersectionObserver(
        (entries) => {
          contactInView = entries.some((e) => e.isIntersecting);
          sync();
        },
        { rootMargin: "0px 0px -15% 0px" }
      );
      io.observe(contact);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <a
      href={h.ctaHref}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-4 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full
                 bg-accent px-7 py-3.5 font-medium text-white transition-all duration-300 lg:hidden
                 ${visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
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
