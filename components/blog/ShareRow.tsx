"use client";

import { useState } from "react";
import { useLang } from "@/components/LangContext";
import { blogUI, postUrl } from "@/lib/blog";
import { trackClick } from "@/lib/track";

export default function ShareRow({ slug, title }: { slug: string; title: string }) {
  const { lang } = useLang();
  const [copied, setCopied] = useState(false);
  const url = postUrl(slug);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackClick("blog_share", { label: "copy" });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard blocked — the visitor can still copy from the address bar */
    }
  }

  const cls =
    "grid h-9 w-9 place-items-center rounded-full border border-line bg-white/[0.03] text-muted transition-colors hover:border-accent hover:text-white";

  return (
    <div className="flex items-center gap-2">
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
        onClick={() => trackClick("blog_share", { label: "linkedin" })}
        className={cls}
      >
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
        </svg>
      </a>

      <a
        href={`https://x.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="X"
        onClick={() => trackClick("blog_share", { label: "x" })}
        className={cls}
      >
        <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" fill="currentColor" aria-hidden>
          <path d="M18.9 2H22l-7.64 8.73L23 22h-6.8l-5.02-6.56L5.4 22H2.3l8.17-9.34L1.5 2h6.97l4.54 6 5.89-6Zm-1.19 18h1.71L7.39 3.9H5.55L17.71 20Z" />
        </svg>
      </a>

      <button onClick={copy} aria-label={blogUI.copyLink[lang]} className={cls}>
        {copied ? (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="var(--mint)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="m4 12 5 5L20 6" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden>
            <path d="M10 13a5 5 0 0 0 7.07 0l2.83-2.83a5 5 0 0 0-7.07-7.07L11.5 4.4" />
            <path d="M14 11a5 5 0 0 0-7.07 0L4.1 13.83a5 5 0 0 0 7.07 7.07L12.5 19.6" />
          </svg>
        )}
      </button>

      <span className="sr-only" role="status">
        {copied ? blogUI.copied[lang] : ""}
      </span>
    </div>
  );
}
