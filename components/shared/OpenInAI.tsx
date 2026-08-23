"use client";

import { useLang } from "@/components/LangContext";
import { trackClick } from "@/lib/track";
import type { Bi } from "@/lib/i18n";

/* Hands a ready-made prompt to an assistant. The blog sends "summarise this
   article"; the prompt library sends the prompt itself, already filled in. */
const TARGETS = [
  { id: "chatgpt", label: "ChatGPT", base: "https://chatgpt.com/?prompt=" },
  { id: "claude", label: "Claude", base: "https://claude.ai/new?q=" },
  { id: "perplexity", label: "Perplexity", base: "https://www.perplexity.ai/search?q=" },
];

function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" aria-hidden>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
      <path d="M18.5 16.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  );
}

export default function OpenInAI({
  prompt,
  label,
  event,
}: {
  prompt: string;
  label: Bi;
  event: string;
}) {
  const { lang } = useLang();
  const openIn = lang === "ar" ? "افتحه في" : "Open in";

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-faint">
        <Sparkle />
        {label[lang]}
      </span>

      <div className="flex flex-wrap gap-2">
        {TARGETS.map((t) => (
          <a
            key={t.id}
            href={`${t.base}${encodeURIComponent(prompt)}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackClick(event, { label: t.id })}
            className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
          >
            {openIn} {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
