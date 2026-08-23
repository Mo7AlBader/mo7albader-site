"use client";

import CoverArt from "./CoverArt";
import type { Block } from "@/lib/blog";

/* Renders **bold** spans without pulling in a markdown dependency. */
function withBold(text: string, key: string) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${key}-${i}`} className="font-semibold text-white">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={`${key}-${i}`}>{part}</span>
    )
  );
}

export default function Prose({ blocks, slug }: { blocks: Block[]; slug: string }) {
  return (
    <div>
      {blocks.map((b, i) => {
        const key = `b-${i}`;

        if (b.t === "h2")
          return (
            <h2
              key={key}
              id={b.id}
              className="font-display mb-4 mt-12 scroll-mt-28 border-t border-line pt-8 text-2xl font-bold tracking-tight md:text-3xl"
            >
              {b.text}
            </h2>
          );

        if (b.t === "h3")
          return (
            <h3 key={key} className="font-display mb-3 mt-8 text-lg font-bold tracking-tight md:text-xl">
              {b.text}
            </h3>
          );

        if (b.t === "ul")
          return (
            <ul key={key} className="my-5 flex flex-col gap-3">
              {b.items.map((item, k) => (
                <li key={`${key}-${k}`} className="flex gap-3 leading-[1.95] text-white/80">
                  <span className="mt-[13px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                  <span>{withBold(item, `${key}-${k}`)}</span>
                </li>
              ))}
            </ul>
          );

        if (b.t === "ol")
          return (
            <ol key={key} className="my-5 flex flex-col gap-3">
              {b.items.map((item, k) => (
                <li key={`${key}-${k}`} className="flex gap-3 leading-[1.95] text-white/80">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-line bg-white/[0.03] text-xs text-accent">
                    {k + 1}
                  </span>
                  <span>{withBold(item, `${key}-${k}`)}</span>
                </li>
              ))}
            </ol>
          );

        if (b.t === "quote")
          return (
            <blockquote
              key={key}
              className="my-7 rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6"
              style={{ borderInlineStartWidth: 3, borderInlineStartColor: "var(--accent)" }}
            >
              <p className="text-lg leading-[1.9] text-white/90">{b.text}</p>
              {b.src && <p className="mt-3 text-sm text-faint">— {b.src}</p>}
            </blockquote>
          );

        if (b.t === "callout")
          return (
            <div key={key} className="my-7 rounded-2xl border border-accent/30 bg-accent/[0.07] p-5 md:p-6">
              {b.title && (
                <p className="font-display mb-2 text-sm font-bold uppercase tracking-wide text-accent">{b.title}</p>
              )}
              <p className="leading-[1.9] text-white/85">{withBold(b.text, key)}</p>
            </div>
          );

        if (b.t === "figure")
          return (
            <figure key={key} className="my-8">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-line">
                <CoverArt slug={`${slug}-${i}`} />
              </div>
              <figcaption className="mt-3 text-center text-sm text-faint">{b.caption}</figcaption>
            </figure>
          );

        return (
          <p key={key} className="mb-5 text-base leading-[1.95] text-white/80 md:text-[17px]">
            {withBold(b.text, key)}
          </p>
        );
      })}
    </div>
  );
}
