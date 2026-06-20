"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Ticker from "./Ticker";

export default function TickerBand({ which }: { which: "work" | "cta" }) {
  const { lang } = useLang();
  return (
    <div className="border-y border-line py-5 my-6">
      <Ticker text={content.tickers[which][lang]} accent={which === "cta"} />
    </div>
  );
}
