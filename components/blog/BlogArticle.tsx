"use client";

import Link from "next/link";
import { useMemo } from "react";
import BlogNav from "./BlogNav";
import BlogFooter from "./BlogFooter";
import CoverArt from "./CoverArt";
import Prose from "./Prose";
import PostCard from "./PostCard";
import TableOfContents from "./TableOfContents";
import ShareRow from "./ShareRow";
import SummarizeWithAI from "./SummarizeWithAI";
import FAQList from "./FAQList";
import { useLang } from "@/components/LangContext";
import {
  author,
  blogUI,
  categoryLabel,
  formatDate,
  relatedPosts,
  tableOfContents,
  type BlogPost,
} from "@/lib/blog";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { lang } = useLang();
  const toc = useMemo(() => tableOfContents(post, lang), [post, lang]);
  const related = useMemo(() => relatedPosts(post), [post]);

  return (
    <>
      <BlogNav />

      <main>
        <div className="mx-auto w-full max-w-[1120px] px-5 py-8 md:px-8 md:py-12">
          {/* ===== breadcrumb ===== */}
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/blog" className="transition-colors hover:text-white">
              {blogUI.blog[lang]}
            </Link>
            <Chevron />
            <Link href={`/blog?category=${post.category}`} className="transition-colors hover:text-white">
              {categoryLabel(post.category, lang)}
            </Link>
            <Chevron />
            <span className="text-faint">{post.title[lang]}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-14">
            {/* ===== article column ===== */}
            <article>
              <header>
                <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
                  {post.title[lang]}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-faint">
                  <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                  <span aria-hidden>·</span>
                  <span>
                    {post.readMin} {blogUI.minRead[lang]}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-line py-5">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="font-display grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.04] text-sm font-bold text-accent"
                    >
                      {author.initials}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{author.name[lang]}</p>
                      <p className="text-xs text-faint">{author.role[lang]}</p>
                    </div>
                  </div>

                  <ShareRow slug={post.slug} title={post.title[lang]} />
                </div>

                <div className="mt-6">
                  <SummarizeWithAI slug={post.slug} />
                </div>

                {post.placeholder && (
                  <p className="mt-6 rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-faint">
                    {blogUI.placeholderNote[lang]}
                  </p>
                )}

                <div className="mt-8 aspect-[16/9] overflow-hidden rounded-3xl border border-line">
                  <CoverArt slug={post.slug} />
                </div>
              </header>

              {/* the table of contents is a sidebar on desktop; on narrow screens
                  it collapses to a details block right above the body */}
              {toc.length > 0 && (
                <details className="mt-8 rounded-2xl border border-line bg-surface p-4 lg:hidden">
                  <summary className="cursor-pointer text-sm font-semibold uppercase tracking-wide text-faint">
                    {blogUI.onThisPage[lang]}
                  </summary>
                  <ul className="mt-3 flex flex-col gap-2">
                    {toc.map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`} className="text-sm text-muted transition-colors hover:text-white">
                          {t.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              )}

              <div className="mt-8">
                <Prose blocks={post.body[lang]} slug={post.slug} />
              </div>

              {post.faq && post.faq.length > 0 && <FAQList items={post.faq} />}

              {/* ===== in-article CTA ===== */}
              <section
                className="relative mt-14 overflow-hidden rounded-[28px] border border-line bg-surface p-7 text-center md:p-10"
                style={{ boxShadow: "var(--glass)" }}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                  style={{ background: "radial-gradient(70% 100% at 50% 100%, rgba(243,80,15,0.2), transparent 70%)" }}
                />
                <div className="relative">
                  <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{blogUI.ctaTitle[lang]}</h2>
                  <p className="mx-auto mt-3 max-w-lg leading-relaxed text-muted">{blogUI.ctaLead[lang]}</p>
                  <Link
                    href="/#contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
                  >
                    {blogUI.ctaButton[lang]}
                  </Link>
                </div>
              </section>
            </article>

            {/* ===== sidebar ===== */}
            <aside className="hidden lg:block">
              <TableOfContents items={toc} />
            </aside>
          </div>

          {/* ===== related ===== */}
          {related.length > 0 && (
            <section className="mt-16 border-t border-line pt-10">
              <h2 className="font-display mb-6 text-2xl font-bold tracking-tight">{blogUI.moreReading[lang]}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <BlogFooter />
    </>
  );
}
