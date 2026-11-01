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
import Testimonials from "@/components/Testimonials";
import Credentials from "@/components/Credentials";
import WorkProcess from "@/components/WorkProcess";
import Goal2028 from "@/components/Goal2028";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { goalProgress } from "@/lib/goal";
import { SITE, NAME_AR, NAME_EN, PERSON_ID, personJsonLd } from "@/lib/identity";

// ProfilePage + Person + WebSite entity graph: how Google identifies the site
// owner. sameAs ties LinkedIn, X and Instagram back to this one identity, so a
// search for "محمد البدر" can surface the site and the profiles together.
const identityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${SITE}/#profilepage`,
      url: SITE,
      name: `${NAME_AR} | ${NAME_EN}`,
      inLanguage: "ar",
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
      isPartOf: { "@id": `${SITE}/#website` },
    },
    personJsonLd,
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: NAME_AR,
      alternateName: [NAME_EN, "mo7albader"],
      inLanguage: "ar",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(identityJsonLd) }}
      />
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
          <TechStack />
          <Partners />
          <Testimonials />
          <Credentials />
          <WorkProcess />
          <Strengths />
          <FAQ />
          <TickerBand which="cta" />
          <Contact />
          <Goal2028 initialProgress={goalProgress()} />
          <Footer />
        </div>
      </main>
    </>
  );
}
