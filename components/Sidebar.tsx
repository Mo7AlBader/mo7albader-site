"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/data";
import { useLang } from "./LangContext";

const icons: Record<string, string> = {
  home: "M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5",
  about: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  now: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  projects: "M3 7l9-4 9 4-9 4-9-4Zm0 5 9 4 9-4m-18 5 9 4 9-4",
  journey: "M6 3v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm12-6v12m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM6 9h9a3 3 0 0 1 3 3",
  goal: "M12 3v18M3 12h18M12 3a9 9 0 0 1 0 18 9 9 0 0 1 0-18Z",
  contact: "M4 6h16v12H4zM4 7l8 6 8-6",
};

export default function Sidebar() {
  const { lang } = useLang();
  const [activeId, setActiveId] = useState<string>(content.nav[0].id);

  // highlight the section currently in view
  useEffect(() => {
    const sections = content.nav
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => (a.boundingClientRect.top < b.boundingClientRect.top ? a : b));
          setActiveId(top.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="hidden lg:flex fixed top-1/2 -translate-y-1/2 ltr:right-6 rtl:left-6 z-50
                 flex-col gap-2 p-1.5 rounded-full border border-line bg-white/5 backdrop-blur"
    >
      {content.nav.map((item) => {
        const active = activeId === item.id;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`group relative grid place-items-center w-11 h-11 rounded-full transition-colors ${
              active ? "text-white bg-white/10" : "text-muted hover:text-white hover:bg-white/5"
            }`}
            aria-label={item[lang]}
            aria-current={active ? "true" : undefined}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke={active ? "var(--accent)" : "currentColor"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d={icons[item.id]} />
            </svg>
            <span
              className="pointer-events-none absolute ltr:right-full rtl:left-full ltr:mr-3 rtl:ml-3
                         whitespace-nowrap rounded-md bg-surface2 border border-line px-2.5 py-1
                         text-xs text-white opacity-0 -translate-x-1 rtl:translate-x-1
                         group-hover:opacity-100 group-hover:translate-x-0 transition-all"
            >
              {item[lang]}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
