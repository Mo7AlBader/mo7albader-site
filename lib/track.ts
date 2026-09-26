declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// every click goes to GA4 (reports) and to the /api/track KV counters
export function trackClick(name: string, props?: Record<string, string>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, props ?? {});
  fetch("/api/track", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, props }),
    keepalive: true,
  }).catch(() => {});
}
