import type { Metadata } from "next";
import AboutContent from "@/components/about/AboutContent";
import { aboutQA } from "@/lib/about";
import { SITE, NAME_AR, NAME_EN, PERSON_ID } from "@/lib/identity";

const title = "من هو محمد البدر؟ مدير منتج في سلة ومؤسس AbdihQT";
const description =
  "محمد البدر مدير منتج سعودي في سلة، ومؤسس AbdihQT. أسئلة وأجوبة عن عمله وخبرته وإنجازاته ومشاريعه. Mohammed AlBader, Product Manager at Salla and founder of AbdihQT.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  robots: { index: true, follow: true },
  openGraph: { type: "profile", title, description, url: "/about", locale: "ar_SA" },
  twitter: { card: "summary_large_image", title, description },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${SITE}/about#faq`,
      url: `${SITE}/about`,
      name: `${NAME_AR} | ${NAME_EN}`,
      inLanguage: "ar",
      about: { "@id": PERSON_ID },
      mainEntity: aboutQA.map((item) => ({
        "@type": "Question",
        name: item.q.ar,
        acceptedAnswer: { "@type": "Answer", text: item.a.ar },
      })),
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutContent />
    </>
  );
}
