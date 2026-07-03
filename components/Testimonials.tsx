"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Testimonials() {
  const { lang } = useLang();
  const t = content.testimonials;

  return (
    <section id="testimonial" className="container py-12 md:py-14">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{t.eyebrow[lang]}</p>
      </Reveal>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {t.items.map((item, i) => {
          const featured = i === 0;
          const name = item.name[lang];
          return (
            <Reveal key={i} delay={i * 0.07} y={28} className={featured ? "sm:col-span-2" : ""}>
              <figure
                className="card relative h-full overflow-hidden p-5 md:p-6"
                style={
                  featured
                    ? { background: "linear-gradient(226deg, #000 0%, #111 45%, rgba(243,80,15,0.55) 170%)" }
                    : undefined
                }
              >
                <blockquote
                  className={`font-display font-medium leading-snug tracking-tight ${
                    featured ? "text-xl md:text-2xl" : "text-lg"
                  }`}
                >
                  “{item[lang]}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.06] font-display text-lg font-bold text-white/80">
                    {name.slice(0, 1)}
                  </span>
                  <div>
                    <p className="font-display font-bold leading-tight">{name}</p>
                    <p className="text-sm text-muted">{item.role[lang]}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
