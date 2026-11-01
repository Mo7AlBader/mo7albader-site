import type { Metadata } from "next";
import BioContent from "@/components/BioContent";
import { goalProgress } from "@/lib/goal";

export const metadata: Metadata = {
  title: { absolute: "محمد البدر | روابطي: لينكدإن، إكس، إنستقرام" },
  description:
    "كل روابط محمد البدر في مكان واحد: لينكدإن، إكس (تويتر)، إنستقرام، سناب شات، ومنتجاتي ومكتبتي للقراءة.",
  alternates: { canonical: "/bio" },
};

export default function BioPage() {
  return <BioContent initialProgress={goalProgress()} />;
}
