"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import PromptCard from "./PromptCard";
import PageNav from "@/components/shared/PageNav";
import PageFooter from "@/components/shared/PageFooter";
import OpenInAI from "@/components/shared/OpenInAI";
import CopyButton from "@/components/shared/CopyButton";
import { useLang } from "@/components/LangContext";
import {
  domainLabel,
  fillPrompt,
  promptsUI,
  relatedPrompts,
  segmentPrompt,
  type Prompt,
} from "@/lib/prompts";

function Chevron() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 rtl:rotate-180" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export default function PromptDetail({ prompt }: { prompt: Prompt }) {
  const { lang } = useLang();
  const [values, setValues] = useState<Record<string, string>>({});
  const related = useMemo(() => relatedPrompts(prompt), [prompt]);

  // what the visitor copies: their values dropped into the English body
  const filled = useMemo(() => fillPrompt(prompt.body, values), [prompt.body, values]);
  const segments = useMemo(() => segmentPrompt(filled), [filled]);

  return (
    <>
      <PageNav section={{ label: promptsUI.section, href: "/prompts" }} />

      <main>
        <div className="mx-auto w-full max-w-[1120px] px-5 py-8 md:px-8 md:py-12">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href="/prompts" className="transition-colors hover:text-white">
              {promptsUI.section[lang]}
            </Link>
            <Chevron />
            <Link href={`/prompts?domain=${prompt.domain}`} className="transition-colors hover:text-white">
              {domainLabel(prompt.domain, lang)}
            </Link>
            <Chevron />
            <span className="text-faint">{prompt.title[lang]}</span>
          </nav>

          <header className="max-w-3xl">
            <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl">
              {prompt.title[lang]}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">{prompt.summary[lang]}</p>
            <p className="mt-4 text-sm text-faint">
              {promptsUI.updated[lang]}: {prompt.updated}
            </p>

            {prompt.placeholder && (
              <p className="mt-6 rounded-2xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-faint">
                {promptsUI.placeholderNote[lang]}
              </p>
            )}
          </header>

          <div className="mt-10 grid gap-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-10">
            {/* ===== fill-in form ===== */}
            {prompt.vars && prompt.vars.length > 0 && (
              <aside className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded-3xl border border-line bg-surface p-5" style={{ boxShadow: "var(--glass)" }}>
                  <h2 className="font-display text-lg font-bold tracking-tight">{promptsUI.fillIn[lang]}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-faint">{promptsUI.fillInNote[lang]}</p>

                  <div className="mt-5 flex flex-col gap-4">
                    {prompt.vars.map((v) => {
                      const multiline = v.placeholder.includes("\n") || v.placeholder.length > 45;
                      const id = `var-${v.token}`;
                      const shared = {
                        id,
                        dir: "ltr" as const,
                        value: values[v.token] ?? "",
                        placeholder: v.placeholder,
                        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                          setValues((prev) => ({ ...prev, [v.token]: e.target.value })),
                        className:
                          "w-full rounded-xl border border-line bg-black/40 px-3.5 py-2.5 text-start font-mono text-[13px] leading-relaxed text-white outline-none transition-colors placeholder:text-faint/70 focus:border-accent",
                      };

                      return (
                        <div key={v.token}>
                          <label htmlFor={id} className="mb-1.5 flex items-baseline gap-2 text-sm text-white/85">
                            {v.label[lang]}
                            <span dir="ltr" className="font-mono text-[11px] text-faint">
                              {`{{${v.token}}}`}
                            </span>
                          </label>
                          {multiline ? <textarea rows={4} {...shared} /> : <input type="text" {...shared} />}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </aside>
            )}

            {/* ===== prompt ===== */}
            <div>
              <div className="rounded-3xl border border-line bg-surface" style={{ boxShadow: "var(--glass)" }}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-5">
                  <div>
                    <h2 className="font-display text-lg font-bold tracking-tight">{promptsUI.thePrompt[lang]}</h2>
                    <p className="mt-1 text-xs text-faint">{promptsUI.englishNote[lang]}</p>
                  </div>
                  <CopyButton
                    text={filled}
                    event="prompt_copy"
                    labelAr={promptsUI.copyPrompt.ar}
                    labelEn={promptsUI.copyPrompt.en}
                  />
                </div>

                <pre
                  dir="ltr"
                  className="max-h-[560px] overflow-auto whitespace-pre-wrap break-words p-5 text-start font-mono text-[13px] leading-[1.85] text-white/85"
                >
                  {segments.map((seg, i) =>
                    seg.token ? (
                      // still a token: nothing typed into that field yet
                      <span key={i} className="rounded bg-accent/15 px-1 text-accent">
                        {seg.text}
                      </span>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </pre>
              </div>

              <div className="mt-5">
                <OpenInAI prompt={filled} label={promptsUI.runIt} event="prompt_run" />
              </div>

              {prompt.howTo && prompt.howTo.length > 0 && (
                <section className="mt-10 border-t border-line pt-8">
                  <h2 className="font-display mb-4 text-xl font-bold tracking-tight">{promptsUI.howToUse[lang]}</h2>
                  <ul className="flex flex-col gap-3">
                    {prompt.howTo.map((h, i) => (
                      <li key={i} className="flex gap-3 leading-[1.95] text-white/80">
                        <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line bg-white/[0.03] text-xs text-accent">
                          {i + 1}
                        </span>
                        <span>{h[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>

          {related.length > 0 && (
            <section className="mt-16 border-t border-line pt-10">
              <h2 className="font-display mb-6 text-2xl font-bold tracking-tight">{promptsUI.related[lang]}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <PromptCard key={p.slug} prompt={p} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      <PageFooter />
    </>
  );
}
