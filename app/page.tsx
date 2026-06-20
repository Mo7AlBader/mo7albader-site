import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import LangToggle from "@/components/LangToggle";
import Hero from "@/components/Hero";
import Now from "@/components/Now";
import Journey from "@/components/Journey";
import Goal2028 from "@/components/Goal2028";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <LangToggle />
      <Sidebar />
      <MobileNav />
      <main>
        <Hero />
        <Now />
        <Journey />
        <Goal2028 />
        <Contact />
      </main>
    </>
  );
}
