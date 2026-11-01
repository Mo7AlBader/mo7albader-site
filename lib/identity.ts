// Single source of truth for who the site owner is and where his profiles live.
// Every page, the Person schema, and llms.txt should point at these exact URLs,
// so search engines merge them into one entity: "محمد البدر".

export const SITE = "https://mo7albader.com";

export const NAME_AR = "محمد البدر";
export const NAME_EN = "Mohammed AlBader";

// spellings people actually type into Google
export const ALT_NAMES = [
  NAME_AR,
  "Mohammed AlBader",
  "Mohammed Al-Bader",
  "Mohammed Al Bader",
  "Mohammad AlBader",
  "Muhammad AlBader",
  "mo7albader",
];

// canonical profile URLs (one spelling each, everywhere)
export const PROFILES = {
  linkedin: "https://www.linkedin.com/in/mo7albader/",
  x: "https://x.com/mo7albader",
  instagram: "https://www.instagram.com/mo7albader/",
  snapchat: "https://www.snapchat.com/add/mo7albader",
} as const;

export const PERSON_ID = `${SITE}/#person`;

export const personJsonLd = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: NAME_AR,
  alternateName: ALT_NAMES.filter((n) => n !== NAME_AR),
  givenName: "محمد",
  familyName: "البدر",
  jobTitle: "مدير منتج · Product Manager",
  worksFor: { "@type": "Organization", name: "Salla", alternateName: "سلة", url: "https://salla.com" },
  description:
    "محمد البدر، مدير منتج في سلة من الرياض. يبني وينمّي منتجات SaaS عبر المنتج والمحتوى والبيانات والذكاء الاصطناعي، ومؤسس AbdihQT. Mohammed AlBader is a Product Manager at Salla and founder of AbdihQT.",
  url: SITE,
  mainEntityOfPage: SITE,
  image: {
    "@type": "ImageObject",
    url: `${SITE}/mohammed.png`,
    caption: NAME_AR,
  },
  address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" },
  nationality: { "@type": "Country", name: "Saudi Arabia" },
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
  sameAs: [PROFILES.linkedin, PROFILES.x, PROFILES.instagram, PROFILES.snapchat, "https://abdihqt.com"],
};
