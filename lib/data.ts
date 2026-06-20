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
    { id: "about", ar: "عنّي", en: "About" },
    { id: "now", ar: "حالياً", en: "Now" },
    { id: "projects", ar: "المشاريع", en: "Work" },
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

  // ===== Tickers (marquee bands) =====
  tickers: {
    work: { ar: "أعمال مختارة", en: "Selected Work" },
    cta: { ar: "خلنا نبني شي", en: "Let's build something" },
  },

  // ===== Stats (impact band) =====
  stats: {
    items: [
      { value: "+1M", ar: "مستخدم وصلهم آمين", en: "users reached · Ameen" },
      { value: "+300K", ar: "طالب في AbdihQT", en: "AbdihQT students" },
      { value: "+5M", ar: "مشاهدة على يوتيوب", en: "YouTube views" },
      { value: "+100", ar: "متجر مبني على سلة", en: "Salla stores built" },
    ],
  },

  // ===== About =====
  about: {
    eyebrow: { ar: "عنّي", en: "About" },
    title: {
      ar: "مدير منتجات وباني من الرياض",
      en: "PM & builder from Riyadh",
    },
    paragraphs: [
      {
        ar: "مهندس برمجيات تحوّل لمدير منتجات. أبني وأطلق منذ كان عمري 17 — بدأت بمنصة AbdihQT التعليمية بدون تمويل خارجي، ووصلت لأكثر من 300 ألف طالب و5 مليون مشاهدة على يوتيوب.",
        en: "A software engineer turned product manager. I've been building and shipping since I was 17 — starting with AbdihQT, a bootstrapped education platform that reached 300K+ students and 5M+ views.",
      },
      {
        ar: "اليوم أقود الاكتساب واستراتيجية الموقع في سلة، أكبر منصة تجارة إلكترونية في السعودية — نمو قائم على البيانات وقرارات تخدم التاجر. فلسفتي: التنفيذ أهم من التخطيط، والإشارة أهم من الضجيج.",
        en: "Today I drive acquisition and website strategy at Salla, Saudi Arabia's largest e-commerce platform — data-driven growth and merchant-first decisions. My philosophy: execution over planning, signal over noise.",
      },
    ],
    tags: ["Product Management", "Growth & Acquisition", "SEO / GEO", "Vibe Coding"],
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

  // ===== Projects (selected work) =====
  projects: {
    eyebrow: { ar: "المشاريع", en: "Selected work" },
    title: { ar: "أشياء بنيتها وأطلقتها", en: "Things I've built & shipped" },
    items: [
      {
        name: "AbdihQT",
        logo: "/logos/abdihqt.png",
        ar: "منصة تعليمية ذاتية التمويل بدأتها في سن 17 — أكثر من 300 ألف طالب و5 مليون مشاهدة على يوتيوب.",
        en: "Bootstrapped education platform I started at 17 — 300K+ students and 5M+ YouTube views.",
        tags: ["EdTech", "Founder", "Since 2018"],
        href: "https://abdihqt.com",
      },
      {
        name: "Salla — Acquisition",
        logo: "/logos/salla.svg",
        ar: "أقود استراتيجية الموقع والاكتساب العضوي (SEO/GEO + PLG)؛ من إطلاق «سوق الجملة» إلى صفحات هبوط عالية التحويل.",
        en: "Leading website strategy & organic acquisition (SEO/GEO + PLG); from the “Wholesale Market” launch to high-converting landing pages.",
        tags: ["PLG", "Acquisition", "2024 →"],
        href: "https://salla.com",
      },
      {
        name: "Ameen",
        logo: "/logos/ameen.svg",
        ar: "متطوّع كمدير منتج — تطبيق وصل لمليون مستخدم في رمضان 2025 وتصدّر متجر التطبيقات.",
        en: "Volunteer PM — an app that reached 1M users in Ramadan 2025 and topped the App Store.",
        tags: ["Volunteer PM", "1M users", "#1 App Store"],
      },
      {
        name: "SalahBreak",
        logo: "/logos/salahbreak.svg",
        ar: "تطبيق يعيد تعريف الصلاة كـ«استراحة صلاة» في بيئة العمل — تكامل مع iOS، Slack، Apple Watch وغيرها.",
        en: "An app reframing prayer as a workplace “prayer break” — integrations across iOS, Slack, Apple Watch & more.",
        tags: ["iOS", "Product", "Building"],
        href: "https://salahbreak.com",
      },
      {
        name: "50 Tools Challenge",
        ar: "تحدٍّ شخصي لبناء 50 أداة منتج عبر Claude API — استكشاف حدود الـ Vibe Coding.",
        en: "A personal challenge to build 50 product tools with the Claude API — exploring the edges of Vibe Coding.",
        tags: ["Claude API", "Builder", "Ongoing"],
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
        ar: "أسّست AbdihQT وعمري 17",
        en: "Founded AbdihQT at 17",
      },
      {
        year: "2021",
        ar: "بنيت +100 متجر على سلة كمزوّد خدمة",
        en: "Built 100+ Salla stores as a service provider",
      },
      {
        year: "2023",
        ar: "مدير منتج متطوّع في آمين — #1 على App Store",
        en: "Volunteer PM at Ameen — #1 on the App Store",
      },
      {
        year: "2024",
        ar: "تخرّجت في هندسة البرمجيات وانضممت لسلة مديرَ منتج",
        en: "Graduated in Software Engineering & joined Salla as PM",
      },
      {
        year: "2025",
        ar: "آمين يتجاوز مليون مستخدم · شهادة Product Analytics",
        en: "Ameen passes 1M users · Product Analytics certification",
      },
      {
        year: "2030",
        ar: "الهدف: CPO",
        en: "Goal: CPO",
        highlight: true,
      },
    ],
  },

  // ===== Expertise (what I do) =====
  expertise: {
    eyebrow: { ar: "الخبرة", en: "What I do" },
    title: { ar: "أين أصنع الأثر", en: "Where I make impact" },
    areas: [
      {
        ar: "استراتيجية المنتج",
        en: "Product Strategy",
        arDesc: "اكتشاف مساحة المشكلة، التحقق، وبناء رودماب يخدم المستخدم والأعمال.",
        enDesc: "Problem-space discovery, validation, and roadmaps that serve user and business.",
      },
      {
        ar: "الاكتساب و PLG",
        en: "Acquisition & PLG",
        arDesc: "SEO/GEO ونمو مدفوع بالمنتج يحوّل الزوار إلى مستخدمين.",
        enDesc: "SEO/GEO and product-led growth that turns visitors into users.",
      },
      {
        ar: "المحتوى والسرد",
        en: "Content & Narrative",
        arDesc: "رسائل ومحتوى يحوّل — من صفحات الهبوط إلى قصص النجاح.",
        enDesc: "Messaging and content that converts — from landing pages to success stories.",
      },
      {
        ar: "البناء السريع",
        en: "Rapid Building",
        arDesc: "نماذج وأدوات تُبنى وتُطلق بسرعة عبر Vibe Coding و Claude API.",
        enDesc: "Prototypes and tools built and shipped fast with Vibe Coding & the Claude API.",
      },
    ],
  },

  // ===== Education & Credentials =====
  credentials: {
    eyebrow: { ar: "التعليم والشهادات", en: "Education & Credentials" },
    title: { ar: "الأساس", en: "The foundation" },
    education: {
      school: { ar: "جامعة حفر الباطن", en: "University of Hafr AlBatin" },
      degree: { ar: "بكالوريوس هندسة برمجيات", en: "BSc, Software Engineering" },
      period: "2019 — 2024",
    },
    certs: [
      {
        name: { ar: "Product Analytics", en: "Product Analytics" },
        issuer: { ar: "Product School", en: "Product School" },
        year: "2025",
      },
    ],
    note: {
      ar: "وشهادات إدارة منتجات أخرى على LinkedIn.",
      en: "Plus more product certifications on LinkedIn.",
    },
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
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mo7albader" },
      { label: "Email", href: "mailto:hello@mo7albader.com" },
      { label: "X", href: "https://x.com/mo7albader" },
    ],
  },

  footer: {
    ar: "صُمّم وبُني بواسطة محمد البدر",
    en: "Designed & built by Mohammed AlBader",
  },
} as const;
