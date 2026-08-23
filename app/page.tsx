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

// Person + WebSite entity graph: how search and answer engines identify the
// site owner; sameAs links tie every profile back to this one identity
const identityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://mo7albader.com/#person",
      name: "Mohammed AlBader",
      alternateName: "محمد البدر",
      jobTitle: "Product Manager",
      worksFor: { "@type": "Organization", name: "Salla", url: "https://salla.com" },
      description:
        "Mohammed AlBader is a Product Manager at Salla. He builds and grows SaaS products through product, content, data and AI. Founder of AbdihQT, an education platform reaching 300K+ students, he started out building 100+ e-commerce stores on Salla.",
      url: "https://mo7albader.com",
      image: "https://mo7albader.com/mohammed.png",
      address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
      alumniOf: { "@type": "CollegeOrUniversity", name: "University of Hafr AlBatin" },
      knowsAbout: [
        "Product Management",
        "Product-led Growth",
        "SaaS",
        "AI Products",
        "Content-led Growth",
        "SEO",
        "AEO",
      ],
      sameAs: [
        "https://www.linkedin.com/in/mo7albader",
        "https://x.com/mo7albader",
        "https://abdihqt.com",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://mo7albader.com/#website",
      url: "https://mo7albader.com",
      name: "Mohammed AlBader",
      inLanguage: "ar",
      publisher: { "@id": "https://mo7albader.com/#person" },
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
