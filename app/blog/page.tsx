import type { Metadata } from "next";
import BlogIndex from "@/components/blog/BlogIndex";

const description =
  "مقالات محمد البدر عن إدارة المنتج، الاكتساب العضوي و PLG، الذكاء الاصطناعي في بناء المنتجات، والمسار المهني من مدير منتج إلى CPO.";

export const metadata: Metadata = {
  title: "المدونة",
  description,
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "المدونة · محمد البدر",
    description,
    url: "/blog",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "المدونة · محمد البدر",
    description,
  },
};

export default function BlogPage() {
  return <BlogIndex />;
}
