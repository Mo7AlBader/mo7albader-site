"use client";

import { content } from "@/lib/data";
import { useLang } from "./LangContext";
import Reveal from "./Reveal";

function ToolLogo({ name, logo }: { name: string; logo?: string | null }) {
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
  if (name === "ChatGPT") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#fff" aria-hidden>
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071.007l-4.83-2.791a4.504 4.504 0 0 1-1.638-6.119zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071-.007l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
      </svg>
    );
  }
  if (name === "Photoshop") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
        <rect x="1" y="1" width="22" height="22" rx="5" fill="#001E36" />
        <text
          x="12"
          y="16.6"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="700"
          fontSize="11"
          fill="#31A8FF"
        >
          Ps
        </text>
      </svg>
    );
  }
  if (logo) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={logo} alt={name} className="h-5 w-5 object-contain" />;
  }
  // fallback monogram for any tool without a bundled logo
  const init = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
  return <span className="font-display text-xs font-bold text-white/70">{init}</span>;
}

export default function TechStack() {
  const { lang } = useLang();
  const t = content.techStack;

  return (
    <section id="stack" className="container py-10 md:py-12">
      <Reveal x={lang === "ar" ? 40 : -40} y={0}>
        <p className="eyebrow">{t.eyebrow[lang]}</p>
        <h2 className="font-display mt-3 text-2xl font-bold tracking-tight md:text-4xl">{t.title[lang]}</h2>
      </Reveal>

      <Reveal delay={0.08} y={16}>
        <div className="mt-6 flex flex-wrap gap-2">
          {t.items.map((item, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-white/80"
            >
              <ToolLogo name={item.name} logo={item.logo} />
              {item.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
