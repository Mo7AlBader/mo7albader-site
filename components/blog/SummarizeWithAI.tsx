"use client";

import { useLang } from "@/components/LangContext";
import { blogUI, postUrl } from "@/lib/blog";
import { trackClick } from "@/lib/track";

/* Hands the article URL to an assistant with a ready-made prompt, so a reader
   in a hurry can get the gist without leaving the decision to them. */
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

export default function SummarizeWithAI({ slug }: { slug: string }) {
  const { lang } = useLang();
  const url = postUrl(slug);

  const prompt =
    lang === "ar"
      ? `اقرأ هذا المقال: ${url} — اكتب لي فقرة قصيرة عن موضوعه، ثم اذكر أهم الأفكار فيه.`
      : `Read this article: ${url} - in a short paragraph, tell me what it is about, then list the key insights.`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-faint">
        <Sparkle />
        {blogUI.summarizeWithAI[lang]}
      </span>

      <div className="flex flex-wrap gap-2">
        {TARGETS.map((t) => (
          <a
            key={t.id}
            href={`${t.base}${encodeURIComponent(prompt)}`}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackClick("blog_summarize", { label: t.id })}
            className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
          >
            {blogUI.openIn[lang]} {t.label}
          </a>
        ))}
      </div>
    </div>
  );
}
