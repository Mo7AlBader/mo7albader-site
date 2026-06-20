"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Ticker from "./Ticker";

export default function TickerBand({ which }: { which: "work" | "cta" }) {
  const { lang } = useLang();
  const big = which === "work";
  return (
    <div className={big ? "overflow-hidden py-8 md:py-12" : "my-6 border-y border-line py-5"}>
      <Ticker text={content.tickers[which][lang]} accent={which === "cta"} big={big} />
    </div>
  );
}
