"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

function ToolLogo({ name }: { name: string }) {
  if (name === "Figma") {
    return (
      <svg viewBox="0 0 38 57" className="h-6 w-6" aria-hidden>
        <path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
        <path fill="#0acf83" d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" />
        <path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 1 9.5 19H19v19H9.5A9.5 9.5 0 0 1 0 28.5z" />
        <path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 1 9.5 0H19v19H9.5A9.5 9.5 0 0 1 0 9.5z" />
        <path fill="#ff7262" d="M19 0h9.5a9.5 9.5 0 1 1 0 19H19V0z" />
      </svg>
    );
  }
  if (name === "Framer") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#0099ff" aria-hidden>
        <path d="M4 0h16v8h-8zm0 8h8l8 8H4zm0 8h8v8z" />
      </svg>
    );
  }
  if (name === "Next.js") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="#fff" aria-hidden>
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.038-.14.045-.495.045H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.472-.054z" />
      </svg>
    );
  }
  if (name === "Claude API" || name === "Claude") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#d97757" aria-hidden>
        <path d="M17.3041 3.541h-3.6718l6.696 16.918H24Zm-10.6082 0L0 20.459h3.7442l1.3693-3.5527h7.0052l1.3693 3.5528h3.7442L10.5363 3.541Zm-.3712 10.181 2.2914-5.9456 2.2914 5.9456Z" />
      </svg>
    );
  }
  // fallback monogram for any future tool without a bundled logo
  const init = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  return <span className="font-display text-lg font-bold text-white">{init}</span>;
}

export default function TechStack() {
  const { lang } = useLang();
  const t = content.techStack;

  return (
    <section id="stack" className="container py-20 md:py-24">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{t.eyebrow[lang]}</p>
        <h2 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">{t.title[lang]}</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        {t.items.map((item, i) => (
          <Reveal key={i} delay={i * 0.06} y={24}>
            <div className="card h-full p-6">
              <span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-white/[0.04]">
                <ToolLogo name={item.name} />
              </span>
              <h3 className="font-display mt-5 text-xl font-bold tracking-tight">{item.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
