"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BlogNav from "./BlogNav";
import BlogFooter from "./BlogFooter";
import PostCard from "./PostCard";
import CoverArt from "./CoverArt";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangContext";
import {
  POSTS_PER_PAGE,
  blogUI,
  categories,
  categoryLabel,
  featuredPost,
  formatDate,
  sortedPosts,
  type CategoryId,
} from "@/lib/blog";

type Filter = CategoryId | "all";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ flip }: { flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${flip ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function BlogIndex() {
  const { lang } = useLang();
  const all = useMemo(() => sortedPosts(), []);
  const featured = useMemo(() => featuredPost(), []);

  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // hydrate state from the URL so a filtered view stays shareable, then keep
  // the URL in step without pushing history entries on every keystroke
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const c = p.get("category");
    if (c && (c === "all" || categories.some((x) => x.id === c))) setFilter(c as Filter);
    const q = p.get("q");
    if (q) setQuery(q);
    const pg = parseInt(p.get("page") || "1", 10);
    if (pg > 1) setPage(pg);
  }, []);

  useEffect(() => {
    const p = new URLSearchParams();
    if (filter !== "all") p.set("category", filter);
    if (query.trim()) p.set("q", query.trim());
    if (page > 1) p.set("page", String(page));
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [filter, query, page]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((post) => {
      if (filter !== "all" && post.category !== filter) return false;
      if (!q) return true;
      return (
        post.title.ar.toLowerCase().includes(q) ||
        post.title.en.toLowerCase().includes(q) ||
        post.excerpt.ar.toLowerCase().includes(q) ||
        post.excerpt.en.toLowerCase().includes(q) ||
        categoryLabel(post.category, lang).toLowerCase().includes(q)
      );
    });
  }, [all, filter, query, lang]);

  const pageCount = Math.max(1, Math.ceil(results.length / POSTS_PER_PAGE));
  const current = Math.min(page, pageCount);
  const visible = results.slice((current - 1) * POSTS_PER_PAGE, current * POSTS_PER_PAGE);

  function apply(next: Filter) {
    setFilter(next);
    setPage(1);
  }

  function goTo(next: number) {
    setPage(next);
    document.getElementById("posts")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <BlogNav />

      <main>
        {/* ===== featured post ===== */}
        <section className="mx-auto w-full max-w-[1120px] px-5 pb-4 pt-10 md:px-8 md:pt-14">
          <Reveal y={16}>
            <p className="eyebrow">{blogUI.blog[lang]}</p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {blogUI.indexTitle[lang]}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{blogUI.indexLead[lang]}</p>
          </Reveal>

          <Reveal delay={0.1} y={20}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group mt-8 grid overflow-hidden rounded-[28px] border border-line bg-surface md:grid-cols-2"
              style={{ boxShadow: "var(--glass)" }}
            >
              <div className="relative aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[380px]">
                <CoverArt
                  slug={featured.slug}
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>

              <div className="flex flex-col justify-center gap-4 p-6 md:p-10">
                <span className="w-fit rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent">
                  {categoryLabel(featured.category, lang)}
                </span>

                <h2 className="font-display text-2xl font-bold leading-tight tracking-tight transition-colors group-hover:text-accent md:text-4xl">
                  {featured.title[lang]}
                </h2>

                <p className="leading-relaxed text-muted">{featured.excerpt[lang]}</p>

                <div className="flex items-center gap-3 text-sm text-faint">
                  <span>{formatDate(featured.date, lang)}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {featured.readMin} {blogUI.minRead[lang]}
                  </span>
                </div>

                <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-black transition-opacity group-hover:opacity-90">
                  {blogUI.readArticle[lang]}
                  <span className="rtl:rotate-180">
                    <Arrow />
                  </span>
                </span>
              </div>
            </Link>
          </Reveal>
        </section>

        {/* ===== filters + search ===== */}
        <section id="posts" className="mx-auto w-full max-w-[1120px] scroll-mt-24 px-5 py-8 md:px-8">
          <div className="rounded-3xl border border-line bg-surface p-4 md:p-5" style={{ boxShadow: "var(--glass)" }}>
            <div className="flex flex-wrap gap-2">
              {([{ id: "all" as Filter, label: blogUI.allPosts }] as { id: Filter; label: { ar: string; en: string } }[])
                .concat(categories.map((c) => ({ id: c.id as Filter, label: c.label })))
                .map((c) => {
                  const active = filter === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => apply(c.id)}
                      aria-pressed={active}
                      className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                        active
                          ? "border-accent bg-accent/10 text-accent"
                          : "border-line bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
                      }`}
                    >
                      {c.label[lang]}
                    </button>
                  );
                })}
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-line pt-4 text-muted focus-within:text-white">
              <SearchIcon />
              <input
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder={blogUI.searchPlaceholder[lang]}
                aria-label={blogUI.searchPlaceholder[lang]}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-faint"
              />
            </div>
          </div>

          {/* ===== grid ===== */}
          {visible.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post, i) => (
                <Reveal key={post.slug} delay={Math.min(i, 5) * 0.05} y={18}>
                  <div className="h-full">
                    <PostCard post={post} />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-line bg-surface p-10 text-center">
              <p className="text-muted">{blogUI.empty[lang]}</p>
              <button
                onClick={() => {
                  setQuery("");
                  apply("all");
                }}
                className="mt-5 rounded-full border border-line bg-white/[0.03] px-5 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
              >
                {blogUI.clear[lang]}
              </button>
            </div>
          )}

          {/* ===== pagination ===== */}
          {pageCount > 1 && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                onClick={() => goTo(current - 1)}
                disabled={current === 1}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
              >
                <span className="rtl:rotate-180">
                  <Arrow flip />
                </span>
                <span className="hidden sm:inline">{blogUI.previous[lang]}</span>
              </button>

              {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  aria-current={n === current ? "page" : undefined}
                  className={`h-10 w-10 rounded-full border text-sm transition-colors ${
                    n === current
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-line bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => goTo(current + 1)}
                disabled={current === pageCount}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white disabled:pointer-events-none disabled:opacity-35"
              >
                <span className="hidden sm:inline">{blogUI.next[lang]}</span>
                <span className="rtl:rotate-180">
                  <Arrow />
                </span>
              </button>
            </nav>
          )}
        </section>

        {/* ===== closing CTA ===== */}
        <section className="mx-auto w-full max-w-[1120px] px-5 pb-16 md:px-8">
          <div
            className="relative overflow-hidden rounded-[28px] border border-line bg-surface p-8 text-center md:p-12"
            style={{ boxShadow: "var(--glass)" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
              style={{ background: "radial-gradient(70% 100% at 50% 100%, rgba(243,80,15,0.2), transparent 70%)" }}
            />
            <div className="relative">
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{blogUI.ctaTitle[lang]}</h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">{blogUI.ctaLead[lang]}</p>
              <Link
                href="/#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                {blogUI.ctaButton[lang]}
                <span className="rtl:rotate-180">
                  <Arrow />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <BlogFooter />
    </>
  );
}
