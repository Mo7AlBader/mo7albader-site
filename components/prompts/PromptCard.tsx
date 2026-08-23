"use client";

import Link from "next/link";
import { useLang } from "@/components/LangContext";
import { domainLabel, promptsUI, type Prompt } from "@/lib/prompts";

export default function PromptCard({ prompt }: { prompt: Prompt }) {
  const { lang } = useLang();
  const fields = prompt.vars?.length ?? 0;

  // first lines of the body, as a monospace teaser — the prompt is the product,
  // so the card shows it rather than a decorative cover
  const teaser = prompt.body.split("\n").slice(0, 3).join("\n");

  return (
    <Link
      href={`/prompts/${prompt.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface transition-colors hover:border-accent/50"
      style={{ boxShadow: "var(--glass)" }}
    >
      <div className="relative overflow-hidden border-b border-line bg-black/40 p-4">
        <pre
          dir="ltr"
          aria-hidden
          className="h-[92px] overflow-hidden whitespace-pre-wrap break-words text-start font-mono text-[11px] leading-[1.7] text-white/35"
        >
          {teaser}
        </pre>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-14"
          style={{ background: "linear-gradient(180deg, transparent, var(--surface))" }}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <span className="w-fit rounded-full border border-line bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white/70">
          {domainLabel(prompt.domain, lang)}
        </span>

        <h3 className="font-display mt-3 text-lg font-bold leading-snug tracking-tight transition-colors group-hover:text-accent">
          {prompt.title[lang]}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{prompt.summary[lang]}</p>

        <div className="mt-auto flex items-center gap-3 border-t border-line pt-4 text-xs text-faint">
          {fields > 0 && (
            <>
              <span className="tabular-nums">
                {fields} {promptsUI.fieldCount[lang]}
              </span>
              <span aria-hidden>·</span>
            </>
          )}
          <span className="font-mono uppercase">EN</span>
        </div>
      </div>
    </Link>
  );
}
