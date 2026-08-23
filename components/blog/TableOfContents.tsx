"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/components/LangContext";
import { blogUI } from "@/lib/blog";

export default function TableOfContents({ items }: { items: { id: string; text: string }[] }) {
  const { lang } = useLang();
  const [active, setActive] = useState(items[0]?.id ?? "");

  /* Position-based rather than IntersectionObserver-based: an observer with a
     narrow activation band silently keeps the previous heading whenever the
     reader jumps past it (anchor links, restored scroll), which reads as a
     stuck highlight. Measuring on every frame is cheap here and always right. */
  useEffect(() => {
    if (items.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.28;
      let current = items[0].id;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= line) current = item.id;
      }

      // at the very bottom the last section is what the reader is looking at,
      // even if its heading scrolled above the line long ago
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) current = items[items.length - 1].id;

      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={blogUI.onThisPage[lang]} className="lg:sticky lg:top-24">
      <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-faint">
        {blogUI.onThisPage[lang]}
      </p>
      <ul className="flex flex-col gap-1 border-s border-line">
        {items.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={`-ms-px block border-s-2 py-1.5 pe-2 ps-4 text-sm leading-snug transition-colors ${
                  isActive
                    ? "border-accent font-semibold text-accent"
                    : "border-transparent text-muted hover:text-white"
                }`}
              >
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
