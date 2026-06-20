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
import Expertise from "@/components/Expertise";
import Strengths from "@/components/Strengths";
import TechStack from "@/components/TechStack";
import Partners from "@/components/Partners";
import Credentials from "@/components/Credentials";
import WorkProcess from "@/components/WorkProcess";
import Goal2028 from "@/components/Goal2028";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

export default function Page() {
  return (
    <>
      <LangToggle />
      <Sidebar />
      <MobileNav />
      <MobileCTA />
      <main>
        <div className="frame">
          <Hero />
          <Stats />
          <About />
          <Now />
          <TickerBand which="work" />
          <Projects />
          <Journey />
          <Expertise />
          <Strengths />
          <TechStack />
          <Partners />
          <Credentials />
          <WorkProcess />
          <Goal2028 />
          <FAQ />
          <TickerBand which="cta" />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
