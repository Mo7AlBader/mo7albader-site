"use client";

import { useLang } from "@/components/LangContext";
import type { Bi } from "@/lib/i18n";

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" strokeLinecap="round" />
    </svg>
  );
}

export type FilterOption = { id: string; label: Bi };

export default function FilterBar({
  options,
  active,
  onFilter,
  query,
  onQuery,
  searchPlaceholder,
}: {
  options: FilterOption[];
  active: string;
  onFilter: (id: string) => void;
  query: string;
  onQuery: (q: string) => void;
  searchPlaceholder: Bi;
}) {
  const { lang } = useLang();

  return (
    <div className="rounded-3xl border border-line bg-surface p-4 md:p-5" style={{ boxShadow: "var(--glass)" }}>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => {
          const isActive = active === o.id;
          return (
            <button
              key={o.id}
              onClick={() => onFilter(o.id)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                isActive
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-line bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
              }`}
            >
              {o.label[lang]}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center gap-3 border-t border-line pt-4 text-muted focus-within:text-white">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
          placeholder={searchPlaceholder[lang]}
          aria-label={searchPlaceholder[lang]}
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-faint"
        />
      </div>
    </div>
  );
}
