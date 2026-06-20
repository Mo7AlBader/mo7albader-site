export type Lang = "ar" | "en";

export const content = {
  // ===== Site meta =====
  meta: {
    name: { ar: "محمد البدر", en: "Mohammed AlBader" },
    role: {
      ar: "مدير منتجات · باني · مؤسس",
      en: "Product Manager · Builder · Founder",
    },
  },

  // ===== Nav (sidebar + drawer) =====
  nav: [
    { id: "home", ar: "الرئيسية", en: "Home" },
    { id: "now", ar: "حالياً", en: "Now" },
    { id: "journey", ar: "المسار", en: "Journey" },
    { id: "goal", ar: "الهدف", en: "Goal" },
    { id: "contact", ar: "تواصل", en: "Contact" },
  ],

  // ===== Hero =====
  hero: {
    available: { ar: "متاح للتعاون", en: "Open to collaborate" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    greeting: { ar: "أنا محمد البدر،", en: "I'm Mohammed AlBader," },
    line: {
      ar: "أبني منتجات تنمو، وأمشي نحو CPO 2030.",
      en: "I build products that grow, on the road to CPO 2030.",
    },
    cta: { ar: "تواصل معي", en: "Get in touch" },
    ctaHref: "#contact",
  },

  // ===== Now =====
  now: {
    eyebrow: { ar: "حالياً أشتغل على", en: "Currently working on" },
    items: [
      {
        ar: "مدير منتج في سلة — أملك الاكتساب، استراتيجية الموقع، والمحتوى.",
        en: "Product Manager at Salla — owning Acquisition, Website Strategy & Content.",
      },
      {
        ar: "أطوّر منصة AbdihQT التعليمية لأكثر من 300 ألف طالب.",
        en: "Growing AbdihQT, an Arabic education platform for 300K+ students.",
      },
      {
        ar: "أبني أدوات ونماذج منتجات بسرعة عبر الـ Vibe Coding.",
        en: "Shipping tools & product prototypes fast with Vibe Coding.",
      },
    ],
  },

  // ===== Journey (timeline) =====
  journey: {
    eyebrow: { ar: "المسار", en: "The journey" },
    title: { ar: "من فكرة إلى مسار واضح", en: "From a spark to a clear path" },
    milestones: [
      {
        year: "2018",
        ar: "أسّست AbdihQT وأنا في الثانوية",
        en: "Founded AbdihQT in high school",
      },
      {
        year: "2021",
        ar: "بنيت +100 متجر على سلة",
        en: "Built 100+ Salla stores",
      },
      {
        year: "2023",
        ar: "مدير منتج متطوّع في أمين (#1 App Store)",
        en: "Volunteer PM at Ameen (#1 App Store)",
      },
      {
        year: "2024",
        ar: "مدير منتج في سلة",
        en: "Product Manager at Salla",
      },
      {
        year: "2030",
        ar: "الهدف: CPO",
        en: "Goal: CPO",
        highlight: true,
      },
    ],
  },

  // ===== Goal 2028 (signature block) =====
  goal: {
    eyebrow: { ar: "الهدف الشخصي", en: "Personal goal" },
    title: { ar: "Range Rover · 2028", en: "Range Rover · 2028" },
    note: {
      ar: "كل ترقية خطوة أقرب. مربوط بالمسار المهني — لا حظ، نظام.",
      en: "Every promotion is one step closer. Tied to the career track — no luck, system.",
    },
    // career ladder that drives the progress bar
    steps: [
      { year: "2026", ar: "مدير منتج أول", en: "Senior PM", done: true },
      { year: "2027", ar: "قائد منتج", en: "Lead PM", done: false },
      { year: "2028", ar: "رئيس منتج", en: "Head of Product", done: false, target: true },
    ],
    progressLabel: { ar: "التقدّم نحو الهدف", en: "Progress to goal" },
  },

  // ===== Contact =====
  contact: {
    eyebrow: { ar: "تواصل", en: "Get in touch" },
    title: { ar: "خلنا نبني شي", en: "Let's build something" },
    note: {
      ar: "مفتوح للنقاش حول المنتجات، الاكتساب، أو أي فكرة تستاهل.",
      en: "Open to talk products, acquisition, or any idea worth it.",
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
      { label: "Email", href: "mailto:hello@mo7albader.com" },
      { label: "X", href: "https://x.com/" },
    ],
  },

  footer: {
    ar: "صُمّم وبُني بواسطة محمد البدر",
    en: "Designed & built by Mohammed AlBader",
  },
} as const;
