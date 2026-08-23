"use client";

import Link from "next/link";
import CoverArt from "./CoverArt";
import { useLang } from "@/components/LangContext";
import { blogUI, categoryLabel, formatDate, type BlogPost } from "@/lib/blog";

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" strokeLinecap="round" />
    </svg>
  );
}

export default function PostCard({ post }: { post: BlogPost }) {
  const { lang } = useLang();

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/50"
      style={{ boxShadow: "var(--glass)" }}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <CoverArt slug={post.slug} className="transition-transform duration-500 group-hover:scale-[1.04]" />
        <span className="absolute start-4 top-4 rounded-full border border-line bg-black/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/85 backdrop-blur">
          {categoryLabel(post.category, lang)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {post.title[lang]}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt[lang]}</p>

        <div className="mt-auto flex items-center gap-3 border-t border-line pt-4 text-xs text-faint">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon />
            {post.readMin} {blogUI.minRead[lang]}
          </span>
          <span aria-hidden>·</span>
          <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
        </div>
      </div>
    </Link>
  );
}
