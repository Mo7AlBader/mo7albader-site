"use client";

import { useLang } from "@/components/LangContext";

function Arrow({ back }: { back?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 rtl:rotate-180 ${back ? "rotate-180" : ""}`}
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

export default function Pagination({
  page,
  pageCount,
  onGo,
}: {
  page: number;
  pageCount: number;
  onGo: (n: number) => void;
}) {
  const { lang } = useLang();
  if (pageCount <= 1) return null;

  const edge =
    "inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-4 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white disabled:pointer-events-none disabled:opacity-35";

  return (
    <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
      <button onClick={() => onGo(page - 1)} disabled={page === 1} className={edge}>
        <Arrow back />
        <span className="hidden sm:inline">{lang === "ar" ? "السابق" : "Previous"}</span>
      </button>

      {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          onClick={() => onGo(n)}
          aria-current={n === page ? "page" : undefined}
          className={`h-10 w-10 rounded-full border text-sm transition-colors ${
            n === page
              ? "border-accent bg-accent/10 text-accent"
              : "border-line bg-white/[0.03] text-white/75 hover:border-white/25 hover:text-white"
          }`}
        >
          {n}
        </button>
      ))}

      <button onClick={() => onGo(page + 1)} disabled={page === pageCount} className={edge}>
        <span className="hidden sm:inline">{lang === "ar" ? "التالي" : "Next"}</span>
        <Arrow />
      </button>
    </nav>
  );
}
