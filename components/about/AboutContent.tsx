"use client";

import Link from "next/link";
import PageNav from "@/components/shared/PageNav";
import PageFooter from "@/components/shared/PageFooter";
import Reveal from "@/components/Reveal";
import { useLang } from "@/components/LangContext";
import { aboutIntro, aboutQA } from "@/lib/about";

const label = { ar: "من هو محمد البدر", en: "About" };

// All answers render as plain text in the HTML (no accordion), so crawlers and
// AI answer engines read every Q&A without running any script.
export default function AboutContent() {
  const { lang } = useLang();

  return (
    <>
      <PageNav section={{ label, href: "/about" }} />

      <main>
        <section className="mx-auto w-full max-w-[760px] px-5 pb-6 pt-10 md:px-8 md:pt-14">
          <p className="eyebrow">{lang === "ar" ? "تعريف" : "Profile"}</p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight md:text-5xl">
            {lang === "ar" ? "من هو محمد البدر؟" : "Who is Mohammed AlBader?"}
          </h1>
          <p className="mt-5 leading-[1.9] text-muted">{aboutIntro[lang]}</p>
        </section>

        <section className="mx-auto w-full max-w-[760px] px-5 pb-16 md:px-8">
          <div className="flex flex-col gap-4">
            {aboutQA.map((item, i) => (
              <Reveal key={i} delay={i * 0.03} y={14}>
                <article className="rounded-2xl border border-line bg-surface p-6">
                  <h2 className="font-display text-lg font-bold leading-snug md:text-xl">{item.q[lang]}</h2>
                  <p className="mt-3 leading-[1.9] text-white/75">{item.a[lang]}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/"
              className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            >
              {lang === "ar" ? "الصفحة الرئيسية" : "Home"}
            </Link>
            <Link
              href="/blog"
              className="rounded-full border border-line px-5 py-2 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
            >
              {lang === "ar" ? "المدونة" : "Blog"}
            </Link>
          </div>
        </section>
      </main>

      <PageFooter />
    </>
  );
}
