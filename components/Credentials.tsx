"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

export default function Credentials() {
  const { lang } = useLang();
  const c = content.credentials;

  return (
    <section id="credentials" className="container py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{c.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl md:text-5xl font-bold tracking-tight">
          {c.title[lang]}
        </h2>
      </Reveal>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        {/* education */}
        <Reveal y={28}>
          <div className="card h-full p-7">
            <p className="eyebrow">{lang === "ar" ? "التعليم" : "Education"}</p>
            <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">
              {c.education.degree[lang]}
            </h3>
            <p className="mt-1 text-muted">{c.education.school[lang]}</p>
            <p className="mt-3 font-display text-sm tabular-nums" style={{ color: "var(--accent)" }}>
              {c.education.period}
            </p>
          </div>
        </Reveal>

        {/* certifications */}
        <Reveal delay={0.08} y={28}>
          <div className="card h-full p-7">
            <p className="eyebrow">{lang === "ar" ? "الشهادات" : "Certifications"}</p>
            <ul className="mt-3 space-y-3">
              {c.certs.map((cert, i) => (
                <li key={i} className="flex items-baseline justify-between gap-3">
                  <span>
                    <span className="font-display text-lg font-bold">{cert.name[lang]}</span>
                    <span className="text-muted"> · {cert.issuer[lang]}</span>
                  </span>
                  <span className="font-display text-sm tabular-nums shrink-0" style={{ color: "var(--accent)" }}>
                    {cert.year}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-faint">{c.note[lang]}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
