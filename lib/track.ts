declare global {
  interface Window {
    zaraz?: { track: (name: string, props?: Record<string, string>) => void };
  }
}

export function trackClick(name: string, props?: Record<string, string>) {
  if (typeof window !== "undefined") {
    window.zaraz?.track(name, props);
  }
}
