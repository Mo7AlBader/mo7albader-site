import { track } from "@vercel/analytics";

export function trackClick(name: string, props?: Record<string, string>) {
  track(name, props);
}
