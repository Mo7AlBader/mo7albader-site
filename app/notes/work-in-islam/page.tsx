import type { Metadata } from "next";
import WorkOfIslamContent from "@/components/notes/WorkOfIslamContent";

const description =
  "سلسلة كتبها عَدي خضر عن العمل في الإسلام: الإتقان، حسن التعامل مع الزملاء، الأمانة، الصدق، القيادة، العدل والرفق. جمعها محمد البدر في صفحة واحدة.";

export const metadata: Metadata = {
  title: "العمل في الإسلام",
  description,
  alternates: { canonical: "/notes/work-in-islam" },
  openGraph: {
    type: "article",
    title: "العمل في الإسلام · سلسلة عَدي خضر",
    description,
    url: "/notes/work-in-islam",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "العمل في الإسلام · سلسلة عَدي خضر",
    description,
  },
};

export default function WorkOfIslamPage() {
  return <WorkOfIslamContent />;
}
