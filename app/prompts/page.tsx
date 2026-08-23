import type { Metadata } from "next";
import PromptsIndex from "@/components/prompts/PromptsIndex";

const description =
  "مكتبة برومبتات جاهزة يستخدمها محمد البدر للتخطيط والعمل العميق والمراجعة الأسبوعية وإدارة المنتج. عبّي الفراغات وانسخ البرومبت أو افتحه مباشرة في ChatGPT أو Claude.";

export const metadata: Metadata = {
  title: "مكتبة البرومبتات",
  description,
  alternates: { canonical: "/prompts" },
  openGraph: {
    type: "website",
    title: "مكتبة البرومبتات · محمد البدر",
    description,
    url: "/prompts",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "مكتبة البرومبتات · محمد البدر",
    description,
  },
};

export default function PromptsPage() {
  return <PromptsIndex />;
}
