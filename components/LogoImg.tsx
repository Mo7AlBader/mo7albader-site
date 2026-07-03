"use client";

import { useState } from "react";

/**
 * <img> with a graceful fallback: if the source 404s or fails to load,
 * shows a small initials monogram instead of a broken-image icon.
 */
export default function LogoImg({
  src,
  alt,
  fallbackText,
  className,
  fallbackClassName = "font-display text-sm font-bold text-white/70",
}: {
  src: string;
  alt: string;
  fallbackText: string;
  className?: string;
  fallbackClassName?: string;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    const init = fallbackText.replace(/[^A-Za-z؀-ۿ]/g, "").slice(0, 2).toUpperCase();
    return <span className={fallbackClassName}>{init}</span>;
  }

  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} onError={() => setBroken(true)} />;
}
