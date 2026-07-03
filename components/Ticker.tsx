"use client";

/**
 * Seamless horizontal marquee. The track holds the phrase twice so the
 * -50% translate loops without a visible jump. `big` renders the oversized
 * display variant used for the "Selected Work" band.
 */
export default function Ticker({
  text,
  accent = false,
  big = false,
  className,
}: {
  text: string;
  accent?: boolean;
  big?: boolean;
  className?: string;
}) {
  const repeats = Array.from({ length: 6 });
  const size = big ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl";
  const innerGap = big ? "gap-8" : "gap-7";
  const star = big ? "text-xl md:text-2xl" : "text-lg";

  const Group = (
    <span className="ticker__item">
      {repeats.map((_, i) => (
        <span key={i} className={`inline-flex items-center ${innerGap}`}>
          <span
            className={`font-display ${size} font-bold tracking-tight`}
            style={{ color: accent ? "var(--accent)" : "var(--white)" }}
          >
            {text}
          </span>
          <span aria-hidden className={star} style={{ color: "var(--accent)" }}>
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
