"use client";

/**
 * Seamless horizontal marquee. The track holds the phrase twice so the
 * -50% translate loops without a visible jump.
 */
export default function Ticker({
  text,
  accent = false,
  className,
}: {
  text: string;
  accent?: boolean;
  className?: string;
}) {
  const repeats = Array.from({ length: 6 });
  const Group = (
    <span className="ticker__item">
      {repeats.map((_, i) => (
        <span key={i} className="inline-flex items-center gap-7">
          <span
            className="font-display text-2xl md:text-3xl font-bold tracking-tight"
            style={{ color: accent ? "var(--accent)" : "var(--white)" }}
          >
            {text}
          </span>
          <span aria-hidden className="text-lg" style={{ color: "var(--accent)" }}>
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div className={`ticker select-none ${className ?? ""}`} aria-hidden>
      <div className="ticker__track">
        {Group}
        {Group}
      </div>
    </div>
  );
}
