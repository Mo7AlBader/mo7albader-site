import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PromptDetail from "@/components/prompts/PromptDetail";
import { getPrompt, promptUrl, prompts } from "@/lib/prompts";

export function generateStaticParams() {
  return prompts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const prompt = getPrompt(params.slug);
  if (!prompt) return { title: "مكتبة البرومبتات" };

  const title = prompt.title.ar;
  const description = prompt.summary.ar;

  return {
    title,
    description,
    alternates: { canonical: `/prompts/${prompt.slug}` },
    openGraph: {
      type: "article",
      title: `${title} · مكتبة البرومبتات`,
      description,
      url: `/prompts/${prompt.slug}`,
      locale: "ar_SA",
    },
    twitter: { card: "summary_large_image", title: `${title} · مكتبة البرومبتات`, description },
  };
}

export default function PromptPage({ params }: { params: { slug: string } }) {
  const prompt = getPrompt(params.slug);
  if (!prompt) notFound();

  // HowTo tells search engines and assistants this page is a usable recipe,
  // which is what makes a prompt page surface in an AI answer
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: prompt.title.ar,
    description: prompt.summary.ar,
    inLanguage: "ar",
    dateModified: prompt.updated,
    author: { "@type": "Person", name: "Mohammed AlBader", url: "https://mo7albader.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": promptUrl(prompt.slug) },
    ...(prompt.howTo && prompt.howTo.length > 0
      ? {
          step: prompt.howTo.map((h, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            text: h.ar,
          })),
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PromptDetail prompt={prompt} />
    </>
  );
}
