import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import LangToggle from "@/components/LangToggle";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Now from "@/components/Now";
import TickerBand from "@/components/TickerBand";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Credentials from "@/components/Credentials";
import Expertise from "@/components/Expertise";
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
        <Stats />
        <About />
        <Now />
        <TickerBand which="work" />
        <Projects />
        <Journey />
        <Credentials />
        <Expertise />
        <Goal2028 />
        <TickerBand which="cta" />
        <Contact />
      </main>
    </>
  );
}
