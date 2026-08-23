/* Deterministic placeholder cover art.

   The blog has no image assets yet, so each post gets a blueprint-style SVG
   generated from its slug. Same slug always yields the same figure, which
   keeps the grid stable between renders and avoids a hydration mismatch. */

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export default function CoverArt({ slug, className = "" }: { slug: string; className?: string }) {
  const h = hash(slug);
  const variant = h % 4;
  const gid = `cover-${slug}`;

  return (
    <svg
      viewBox="0 0 640 360"
      role="presentation"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid slice"
      style={{ direction: "ltr" }}
    >
      <defs>
        <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id={`${gid}-glow`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <pattern id={`${gid}-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        </pattern>
      </defs>

      <rect width="640" height="360" fill={`url(#${gid}-bg)`} />
      <rect width="640" height="360" fill={`url(#${gid}-grid)`} />
      <circle cx={140 + (h % 5) * 70} cy={90 + (h % 3) * 60} r="170" fill={`url(#${gid}-glow)`} />

      <g fill="none" stroke="var(--accent)" strokeWidth="1.4" opacity="0.85">
        {variant === 0 && (
          <>
            <circle cx="320" cy="180" r="64" />
            <circle cx="320" cy="180" r="104" strokeDasharray="6 8" opacity="0.5" />
            <path d="M320 76v208M216 180h208" strokeWidth="1" opacity="0.35" />
            <rect x="292" y="152" width="56" height="56" transform="rotate(45 320 180)" opacity="0.6" />
          </>
        )}
        {variant === 1 && (
          <>
            <path d="M150 250l70-80 60 45 80-110 70 55 60-70" />
            <circle cx="220" cy="170" r="5" fill="var(--accent)" />
            <circle cx="360" cy="105" r="5" fill="var(--accent)" />
            <circle cx="490" cy="90" r="5" fill="var(--accent)" />
            <path d="M150 290h340" strokeWidth="1" opacity="0.3" />
          </>
        )}
        {variant === 2 && (
          <>
            <rect x="180" y="110" width="120" height="70" rx="10" />
            <rect x="345" y="110" width="120" height="70" rx="10" opacity="0.55" />
            <rect x="262" y="225" width="120" height="70" rx="10" opacity="0.55" />
            <path d="M240 180v25h82v20M405 180v25h-83v20" strokeWidth="1" opacity="0.45" />
          </>
        )}
        {variant === 3 && (
          <>
            <path d="M200 260V140M280 260V95M360 260V175M440 260V120" strokeWidth="10" strokeLinecap="round" />
            <path d="M170 285h300" strokeWidth="1" opacity="0.35" />
            <circle cx="280" cy="95" r="9" fill="var(--accent)" stroke="none" />
          </>
        )}
      </g>
    </svg>
  );
}
