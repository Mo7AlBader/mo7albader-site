import { content } from "@/lib/data";

/* Single source of truth for the Range Rover goal bar.

   The bar ticks up by `monthlyIncrement` on one fixed day of each month
   (the day encoded in `baselineDate`). Both the homepage card and the bio
   page read from here so the two can never drift apart. */

export function goalProgress(now: Date = new Date()): number {
  const { baselineDate, baselineProgress, monthlyIncrement } = content.goal;
  const [year, month, tickDay] = baselineDate.split("-").map(Number);

  let ticks = (now.getFullYear() - year) * 12 + (now.getMonth() - (month - 1));
  // this month's tick has not landed yet
  if (now.getDate() < tickDay) ticks -= 1;

  const pct = baselineProgress + Math.max(0, ticks) * monthlyIncrement;
  // one decimal is enough and keeps 1.5% steps from accumulating float noise
  return Math.min(100, Math.round(pct * 10) / 10);
}

/** 14.5 -> "14.5", 16 -> "16" */
export function formatGoalProgress(pct: number): string {
  return Number.isInteger(pct) ? String(pct) : pct.toFixed(1);
}
