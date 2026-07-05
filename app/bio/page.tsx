import type { Metadata } from "next";
import BioContent from "@/components/BioContent";

export const metadata: Metadata = {
  title: "روابطي",
  description: "روابطي، منتجاتي، ومكتبتي للقراءة.",
  alternates: { canonical: "/bio" },
};

export default function BioPage() {
  return <BioContent />;
}
