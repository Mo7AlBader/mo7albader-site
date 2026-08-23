"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import PromptCard from "./PromptCard";
import PageNav from "@/components/shared/PageNav";
import PageFooter from "@/components/shared/PageFooter";
import FilterBar from "@/components/shared/FilterBar";
import Pagination from "@/components/shared/Pagination";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangContext";
import {
  PROMPTS_PER_PAGE,
  domainLabel,
  domains,
  promptsUI,
  sortedPrompts,
} from "@/lib/prompts";

export default function PromptsIndex() {
  const { lang } = useLang();
  const all = useMemo(() => sortedPrompts(), []);

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  // keep a filtered view shareable without pushing a history entry per keystroke
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const d = p.get("domain");
    if (d && (d === "all" || domains.some((x) => x.id === d))) setFilter(d);
    const q = p.get("q");
    if (q) setQuery(q);
    const pg = parseInt(p.get("page") || "1", 10);
    if (pg > 1) setPage(pg);
  }, []);

  useEffect(() => {
    const p = new URLSearchParams();
    if (filter !== "all") p.set("domain", filter);
    if (query.trim()) p.set("q", query.trim());
    if (page > 1) p.set("page", String(page));
    const qs = p.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [filter, query, page]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((p) => {
      if (filter !== "all" && p.domain !== filter) return false;
      if (!q) return true;
      return (
        p.title.ar.toLowerCase().includes(q) ||
        p.title.en.toLowerCase().includes(q) ||
        p.summary.ar.toLowerCase().includes(q) ||
        p.summary.en.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        domainLabel(p.domain, lang).toLowerCase().includes(q)
      );
    });
  }, [all, filter, query, lang]);

  const pageCount = Math.max(1, Math.ceil(results.length / PROMPTS_PER_PAGE));
  const current = Math.min(page, pageCount);
  const visible = results.slice((current - 1) * PROMPTS_PER_PAGE, current * PROMPTS_PER_PAGE);

  function goTo(n: number) {
    setPage(n);
    document.getElementById("library")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <PageNav section={{ label: promptsUI.section, href: "/prompts" }} />

      <main>
        <section className="mx-auto w-full max-w-[1120px] px-5 pb-4 pt-10 md:px-8 md:pt-14">
          <Reveal y={16}>
            <p className="eyebrow">{promptsUI.section[lang]}</p>
            <h1 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              {promptsUI.title[lang]}
            </h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted">{promptsUI.lead[lang]}</p>
            <p className="mt-3 max-w-2xl text-sm text-faint">{promptsUI.englishNote[lang]}</p>
          </Reveal>
        </section>

        <section id="library" className="mx-auto w-full max-w-[1120px] scroll-mt-24 px-5 py-8 md:px-8">
          <FilterBar
            options={[{ id: "all", label: promptsUI.all }, ...domains.map((d) => ({ id: d.id, label: d.label }))]}
            active={filter}
            onFilter={(id) => {
              setFilter(id);
              setPage(1);
            }}
            query={query}
            onQuery={(q) => {
              setQuery(q);
              setPage(1);
            }}
            searchPlaceholder={promptsUI.searchPlaceholder}
          />

          {visible.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i, 5) * 0.05} y={18}>
                  <div className="h-full">
                    <PromptCard prompt={p} />
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-3xl border border-line bg-surface p-10 text-center">
              <p className="text-muted">{promptsUI.empty[lang]}</p>
              <button
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                  setPage(1);
                }}
                className="mt-5 rounded-full border border-line bg-white/[0.03] px-5 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
              >
                {promptsUI.clear[lang]}
              </button>
            </div>
          )}

          <Pagination page={current} pageCount={pageCount} onGo={goTo} />
        </section>

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
              <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{promptsUI.ctaTitle[lang]}</h2>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted">{promptsUI.ctaLead[lang]}</p>
              <Link
                href="/#contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
              >
                {promptsUI.ctaButton[lang]}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
