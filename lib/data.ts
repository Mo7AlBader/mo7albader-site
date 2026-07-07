export type Lang = "ar" | "en";

export const content = {
  // ===== Site meta =====
  meta: {
    name: { ar: "محمد البدر", en: "Mohammed AlBader" },
    role: {
      ar: "AI Product Growth Manager",
      en: "AI Product Growth Manager",
    },
  },

  // ===== Nav (sidebar + drawer) =====
  nav: [
    { id: "home", ar: "الرئيسية", en: "Home" },
    { id: "about", ar: "عنّي", en: "About" },
    { id: "now", ar: "حالياً", en: "Now" },
    { id: "projects", ar: "المشاريع", en: "Work" },
    { id: "journey", ar: "الخبرة", en: "Experience" },
    { id: "contact", ar: "تواصل", en: "Contact" },
    { id: "goal", ar: "الهدف", en: "Goal" },
  ],

  // ===== Hero =====
  hero: {
    available: { ar: "متاح للاستشارات فقط", en: "Available for advisory only" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    greeting: { ar: "أنا محمد البدر،", en: "I'm Mohammed AlBader," },
    line: {
      ar: "AI Product Growth Manager أبني وأنمّي منتجات SaaS عبر المنتج، المحتوى، البيانات، والذكاء الاصطناعي. من بناء مجتمع تعليمي وصل إلى +300K طالب، إلى قيادة مبادرات نمو في Salla، إلى منتجات وصلت لملايين المستخدمين، تركيزي اليوم هو تحويل الفكرة إلى قناة نمو قابلة للتوسع.",
      en: "an AI Product Growth Manager who builds and grows SaaS and digital products through product, content, data and AI. From growing an education community to 300K+ students, to leading growth initiatives at Salla, to products reaching millions of users, my focus today is turning an idea into a growth channel that scales.",
    },
    cta: { ar: "تواصل لاستشارة منتج", en: "Book a product chat" },
    ctaHref: "#contact",
    work: { ar: "شوف كيف أصنع النمو", en: "See how I drive growth" },
    workHref: "#projects",
    // proof above the fold (CRO P6/P7)
    proof: [
      { value: "+2M", ar: "مستخدم عبر منتجات رقمية", en: "users across digital products" },
      { value: "+300K", ar: "طالب عبر Content-led Growth", en: "students via content-led growth" },
      { value: "+2,000", ar: "تاجر ضمن SaaS Growth", en: "merchants in SaaS growth" },
      { value: "+8", ar: "سنوات بناء وتوزيع منتجات", en: "yrs building & shipping products" },
    ],
  },

  // ===== Tickers (marquee bands) =====
  tickers: {
    work: { ar: "أعمال مختارة", en: "Selected Work" },
    cta: { ar: "خلنا نبني نمو واضح", en: "Let's build clear growth" },
  },

  // ===== Stats (impact band) =====
  stats: {
    ready: { ar: "الأثر، بالأرقام", en: "Impact, in numbers" },
    items: [
      { value: "+2M", ar: "مستخدم وصلهم آمين", en: "users reached · Ameen" },
      { value: "+300K", ar: "طالب في AbdihQT", en: "AbdihQT students" },
      { value: "+6M", ar: "مشاهدة على يوتيوب", en: "YouTube views" },
      { value: "+100", ar: "متجر بنيته على سلة", en: "Salla stores I built" },
    ],
  },

  // ===== About =====
  about: {
    eyebrow: { ar: "عنّي", en: "About" },
    title: {
      ar: "باني نمو قبل ما أكون مدير منتج",
      en: "A growth builder before I was ever a PM",
    },
    paragraphs: [
      {
        ar: "بدأت رحلتي من مشكلة شخصية في التعليم، ثم تحولت إلى مجتمع ومنتج وصل لأكثر من 300 ألف طالب. من هناك فهمت أن المنتج الناجح لا يكفي أن يكون جيدًا، لازم يكون قابلًا للاكتشاف، الفهم، الاستخدام، والنمو.",
        en: "My journey started from a personal problem in education, which grew into a community and then a product reaching 300K+ students. From there I learned that a good product isn't enough. It has to be discoverable, understandable, usable, and built to grow.",
      },
      {
        ar: "اليوم أعمل على تقاطع المنتج، النمو، المحتوى، والذكاء الاصطناعي. في Salla، أقود مبادرات اكتساب وتجارب ويب تخدم آلاف التجار وتحوّل الصفحات من واجهات تعريفية إلى قنوات نمو.",
        en: "Today I work at the intersection of product, growth, content, and AI. At Salla, I lead acquisition initiatives and web experiences serving thousands of merchants, turning pages from static profiles into growth channels.",
      },
      {
        ar: "وفي مشاريعي الجانبية، أبني وأختبر منتجات بسرعة باستخدام أدوات AI و Vibe Coding. تموضعي واضح: أساعد منتجات SaaS والمنتجات الرقمية على النمو من خلال Product-led Growth، السرد، التجربة، والأنظمة الذكية.",
        en: "In my side projects, I build and test products fast using AI tools and Vibe Coding. My focus is clear: helping SaaS and digital products grow through product-led growth, storytelling, experience, and smart systems.",
      },
    ],
    tags: ["AI Product Growth", "SaaS / PLG", "Product Strategy", "Content-led Acquisition", "Rapid Prototyping"],
  },

  // ===== Now =====
  now: {
    eyebrow: { ar: "حالياً أشتغل على", en: "Currently working on" },
    items: [
      {
        ar: "أقود نمو واكتساب منتجات SaaS في Salla عبر صفحات، محتوى، وتجارب تحويل.",
        en: "Leading SaaS growth & acquisition at Salla through pages, content, and conversion experiences.",
      },
      {
        ar: "أطوّر AbdihQT كمنصة تعليمية قائمة على المحتوى والمجتمع والمنتج.",
        en: "Growing AbdihQT, an education platform built on content, community, and product.",
      },
      {
        ar: "أبني نماذج AI Products بسرعة عبر Claude API و Vibe Coding.",
        en: "Shipping AI product prototypes fast with the Claude API and Vibe Coding.",
      },
      {
        ar: "أوثّق خبرتي في Product Growth و PLG و AI عبر محتوى عملي.",
        en: "Documenting what I learn about Product Growth, PLG, and AI through practical content.",
      },
    ],
  },

  // ===== Projects (selected work) =====
  projects: {
    eyebrow: { ar: "المشاريع", en: "Selected work" },
    title: { ar: "مختبر النمو: منتجات، قنوات، وتجارب صنعت أثرًا", en: "The growth lab: products, channels, and experiments that made an impact" },
    items: [
      {
        name: "Salla",
        logo: "/logos/salla.svg",
        cover: "/covers/salla.png",
        ar: "أقود مبادرات Product Growth و PLG داخل Salla، مع تركيز على تحويل صفحات وتجارب المنتج إلى قنوات اكتساب وتبنّي. عملت على قطاعات تضم +2,000 تاجر، وساهمت في نمو GMV بنسبة 150% ونمو التبنّي بنسبة 200% خلال أول أسبوعين من إطلاق تجربة كاشير سلة.",
        en: "Leading Product Growth and PLG initiatives at Salla, turning product pages and experiences into acquisition and adoption channels. Worked across sectors with 2,000+ merchants, contributing to 150% GMV growth and 200% adoption growth within the first two weeks of the Salla Cashier launch.",
        tags: ["SaaS Product Growth", "PLG", "MENA's Commerce Engine"],
        href: "https://salla.com",
      },
      {
        name: "Ameen",
        logo: "/logos/ameen.svg",
        cover: "/covers/ameen.png",
        ar: "ساهمت في تجربة ونمو منتج وصل لأكثر من مليوني مستخدم، تصدّر متجر التطبيقات، وخلق عادة استخدام يومية لمستخدمين في عدة دول.",
        en: "Contributed to the product experience and growth of an app that reached 2M+ users, topped the App Store, and built a daily usage habit across multiple countries.",
        tags: ["Consumer App Growth", "1M users", "#1 App Store"],
        href: "https://ameenapp.org",
      },
      {
        name: "AbdihQT",
        logo: "/logos/abdihqt.png",
        cover: "/covers/abdihqt.png",
        ar: "نموذج واضح لتحويل المحتوى إلى منتج. بدأ كمجتمع تعليمي ثم تحول إلى منتجات مدفوعة، ثقة، مبيعات، وأثر مباشر على آلاف الطلاب.",
        en: "A clear model for turning content into a product. Started as an education community, then became paid products, trust, sales, and direct impact on thousands of students.",
        tags: ["Content-led Growth", "Founder", "Since 2018"],
        href: "https://abdihqt.com",
      },
      {
        name: "SalahBreak",
        logo: "/logos/salahbreak.svg",
        cover: "/covers/salahbreak.png",
        ar: "تطبيق يحوّل الصلاة إلى «استراحة» داخل بيئة العمل، مع تكامل عبر iOS وSlack وApple Watch وغيرها.",
        en: "An app reframing prayer as a workplace break, with integrations across iOS, Slack, Apple Watch and more.",
        tags: ["AI Product", "Product", "Building"],
        href: "https://salahbreak.com",
      },
      {
        name: "50 Tools Challenge",
        ar: "تحدٍّ شخصي لبناء 50 أداة منتج بالـ Claude API، أستكشف فيه حدود الـ Vibe Coding.",
        en: "A personal challenge to build 50 product tools with the Claude API, pushing the edges of Vibe Coding.",
        tags: ["AI Product Lab", "Builder", "Ongoing"],
      },
    ],
  },

  // ===== Journey (timeline) =====
  journey: {
    eyebrow: { ar: "الخبرة المهنية", en: "Experience" },
    title: { ar: "وين اشتغلت وبنيت", en: "Where I've worked & built" },
    // start/end as YYYY-MM (end null = ongoing); duration is computed from these
    roles: [
      {
        title: { ar: "مدير منتج", en: "Product Manager" },
        company: { ar: "Salla", en: "Salla" },
        logo: "/logos/salla.svg",
        start: "2024-04",
        end: null,
        impact: { ar: "+2,000 تاجر · +150% نمو GMV", en: "2,000+ merchants · +150% GMV growth" },
        stores: false,
        ar: "أقود استراتيجية المنتج والنمو عبر قطاعين تجاريين يشملان أكثر من 2,000 تاجر. قدت إعادة تصميم وإطلاق تجربة «كاشير سلة»، وساهمت في نمو الـ GMV بنسبة 150% ونمو التبنّي بنسبة 200% خلال أول أسبوعين. أطلقت «سوق الجملة» من الألف إلى الياء، وألّفت دليل تهيئة تجار من 30 صفحة.",
        en: "Leading product & growth strategy across two merchant sectors reaching 2,000+ merchants. Led the Salla Cashier (POS) redesign and relaunch, contributing to 150% GMV growth and 200% adoption growth within two weeks. Owned the Wholesale Market GTM end-to-end and authored a 30-page merchant onboarding guide.",
      },
      {
        title: { ar: "مؤسس", en: "Founder" },
        company: { ar: "AbdihQT", en: "AbdihQT" },
        logo: "/logos/abdihqt.png",
        start: "2018-02",
        end: null,
        impact: null,
        stores: false,
        ar: "احتياجي الشخصي للاستعداد للقدرات والتحصيلي خلّاني أبني مجتمعاً تحوّل لمنتج، ثم لمنظومة كاملة: بعت أكثر من 26 ألف دورة وكتاب إلكتروني، وقدت فريق محتوى من 9 أشخاص، ووصلت المنظومة لأكثر من 400 ألف متابع و6 مليون مشاهدة على يوتيوب.",
        en: "My own need to prep for Qudurat & Tahsili led me to build a community, then a product, then a full system: sold 26,000+ courses and e-books, led a 9-person content team, and grew the platform to 400K+ followers with 6M+ YouTube views.",
      },
      {
        title: { ar: "مدير منتج (بارت تايم)", en: "Product Manager (Part-time)" },
        company: { ar: "Ameen App", en: "Ameen App" },
        logo: "/logos/ameen.svg",
        start: "2025-02",
        end: null,
        impact: { ar: "+2 مليون مستخدم · +14 ألف تقييم", en: "2M+ users · 14K+ ratings" },
        stores: true,
        ar: "بنيت الأذكار والمصحف والرئيسية واختصاراتها والخدمات، من التصوّر إلى النظام والمنتج وتجربة الاستخدام. قدت استراتيجية النمو التي أوصلت التطبيق لأكثر من 100 ألف تحميل خلال 20 يوم، والمركز الأول في آب ستور بأسبوع الإطلاق، ووصول لـ142 دولة.",
        en: "Built Athkar, the Mushaf, the Home screen and its shortcuts, and Services, owning the concept, the system, the product and the UX. Led the growth strategy behind 100K+ downloads in 20 days, a #1 App Store ranking in launch week, and reach across 142 countries.",
      },
      {
        title: { ar: "مدير نمو المنتج", en: "Product Growth Manager" },
        company: { ar: "Doolab Agency", en: "Doolab Agency" },
        logo: "/logos/doolab.svg",
        start: "2025-11",
        end: "2026-06",
        impact: null,
        stores: false,
        ar: "ساعدت دولاب في النمو وإعادة تموضع خدماتها، وقيّمت مشاريعها وحسّنت خطط إطلاقها. من أبرز اللي اشتغلت عليه: Tecno Mobile، bxstore، بندر بطاطا، ودافور.",
        en: "Helped Doolab grow and reposition its services, evaluating projects and sharpening launch plans. Highlights: Tecno Mobile, bxstore, Bandar Batata, and Dafoor.",
      },
      {
        title: { ar: "مدير منتج - مسار تعلم", en: "Product Manager - Learning Path" },
        company: { ar: "Algooru", en: "AlGooru" },
        logo: "/logos/partners/algooru.png",
        start: "2025-02",
        end: "2025-05",
        impact: null,
        stores: false,
        ar: "صممت واستشرت في بناء مسار تعلّم مدعوم بالذكاء الاصطناعي لمادة القدرات ضمن منصة Algooru التعليمية، ودعمت مرحلة البناء الأولى وتصميم تجربة التعلّم.",
        en: "Designed and consulted on an AI-powered Qudrat learning path for AlGooru's education platform, supporting the initial build phase and learning-experience design.",
      },
    ],
  },

  // ===== Expertise (what I do) =====
  expertise: {
    eyebrow: { ar: "مجالات التركيز", en: "What I do" },
    title: { ar: "أين أصنع الأثر", en: "Where I make impact" },
    areas: [
      {
        ar: "AI Product Growth",
        en: "AI Product Growth",
        arDesc: "أحوّل أدوات الذكاء الاصطناعي من تجارب متفرقة إلى منتجات، عمليات، ونماذج نمو قابلة للاستخدام.",
        enDesc: "I turn scattered AI experiments into real products, operations, and growth models you can actually use.",
      },
      {
        ar: "SaaS & PLG Acquisition",
        en: "SaaS & PLG Acquisition",
        arDesc: "أبني صفحات وتجارب تساعد المستخدم يفهم المنتج، يبدأ أسرع، ويتحول من زائر إلى مستخدم أو عميل.",
        enDesc: "I build pages and experiences that help users understand the product, start faster, and convert from visitor to user or customer.",
      },
      {
        ar: "Content-led Growth",
        en: "Content-led Growth",
        arDesc: "أستخدم المحتوى والسرد كقناة اكتساب، لا كمنشورات فقط. تعليم، ثقة، توزيع، وتحويل.",
        enDesc: "I use content and storytelling as an acquisition channel, not just posts. Education, trust, distribution, and conversion.",
      },
      {
        ar: "Rapid Product Building",
        en: "Rapid Product Building",
        arDesc: "أبني نماذج وتجارب بسرعة عبر Vibe Coding، ثم أقيس وأكرر بناءً على الأثر.",
        enDesc: "I build prototypes and experiments fast with Vibe Coding, then measure and iterate based on the impact.",
      },
    ],
  },

  // ===== Strengths (CliftonStrengths · Gallup) =====
  strengths: {
    eyebrow: { ar: "نقاط القوة", en: "Strengths" },
    source: { ar: "CliftonStrengths® · Gallup · 2024", en: "CliftonStrengths® · Gallup · 2024" },
    title: { ar: "كيف أشتغل", en: "How I work" },
    moreLabel: { ar: "وأيضاً ضمن العشرة الأوائل", en: "Also in my top 10" },
    domains: {
      strategic: { ar: "تفكير استراتيجي", en: "Strategic Thinking", color: "#1ef482" },
      executing: { ar: "تنفيذ", en: "Executing", color: "#a855f7" },
      influencing: { ar: "تأثير", en: "Influencing", color: "#f3500f" },
      relationship: { ar: "بناء علاقات", en: "Relationship Building", color: "#4d8cff" },
    },
    top5: [
      { name: "Ideation", domain: "strategic", ar: "مفتون بالأفكار، وأربط بين ظواهر تبدو غير مترابطة.", en: "Fascinated by ideas; I connect seemingly disparate dots." },
      { name: "Input", domain: "strategic", ar: "أجمع وأؤرشف المعرفة والأفكار باستمرار.", en: "I constantly collect and archive knowledge and ideas." },
      { name: "Arranger", domain: "executing", ar: "أنظّم الناس والموارد لأقصى إنتاجية ومرونة.", en: "I organize people and resources for maximum productivity." },
      { name: "Activator", domain: "influencing", ar: "أحوّل الأفكار إلى فعل، والتنفيذ عندي قبل التخطيط.", en: "I turn ideas into action. Execution over planning." },
      { name: "Futuristic", domain: "strategic", ar: "تُلهمني صورة المستقبل وأرسم الطريق نحوها.", en: "Inspired by what could be, and I sketch the path toward it." },
    ],
    more: [
      { rank: 6, name: "Empathy", domain: "relationship" },
      { rank: 7, name: "Relator", domain: "relationship" },
      { rank: 8, name: "Responsibility", domain: "executing" },
      { rank: 9, name: "Restorative", domain: "executing" },
      { rank: 10, name: "Intellection", domain: "strategic" },
    ],
  },

  // ===== Tech stack =====
  techStack: {
    eyebrow: { ar: "أدواتي", en: "Tech stack" },
    title: { ar: "اللي أشتغل فيه", en: "What I work with" },
    groups: [
      {
        label: { ar: "AI & Building", en: "AI & Building" },
        items: [
          { name: "Claude", logo: null, ar: "توليد المحتوى وبناء الأدوات", en: "Content & tooling" },
          { name: "ChatGPT", logo: null, ar: "بحث وصياغة وعصف أفكار", en: "Research & drafting" },
          { name: "Manus AI", logo: "/logos/tools/manus.png", ar: "وكيل ذكاء ينجز المهام", en: "Agentic task runner" },
          { name: "Antigravity", logo: "/logos/tools/antigravity.png", ar: "بيئة برمجة وكيلة", en: "Agentic coding IDE" },
          { name: "Cursor", logo: "/logos/tools/cursor.svg", ar: "محرّر أكواد بالذكاء الاصطناعي", en: "AI-native code editor" },
          { name: "Next.js", logo: null, ar: "تطبيقات React سريعة", en: "Fast React apps" },
        ],
      },
      {
        label: { ar: "Growth & Analytics", en: "Growth & Analytics" },
        items: [
          { name: "GA4", logo: "/logos/tools/ga.svg", ar: "تحليلات المنتج والاكتساب", en: "Product & acquisition analytics" },
          { name: "Mixpanel", logo: "/logos/tools/mixpanel.svg", ar: "قياس الإيفنتات وتقارير النمو", en: "Event analytics & growth reports" },
          { name: "Looker", logo: null, ar: "تقارير ولوحات بيانات النمو", en: "Growth dashboards & reporting" },
          { name: "Hotjar", logo: null, ar: "خرائط حرارية وتسجيلات المستخدم", en: "Heatmaps & session recordings" },
          { name: "Adjust", logo: null, ar: "قياس نسب التحويل ومصادر التثبيت", en: "Attribution & install tracking" },
          { name: "AppsFlyer", logo: null, ar: "قياس أداء الحملات والقنوات", en: "Campaign & channel measurement" },
        ],
      },
      {
        label: { ar: "Product & Delivery", en: "Product & Delivery" },
        items: [
          { name: "Jira", logo: null, ar: "تتبّع المهام وإدارة السبرنتات", en: "Task tracking & sprints" },
          { name: "Figma", logo: null, ar: "تصميم الواجهات وأنظمتها", en: "UI & design systems" },
          { name: "Framer", logo: null, ar: "بناء ونشر مواقع تفاعلية", en: "Ship interactive sites" },
          { name: "OneSignal", logo: null, ar: "إشعارات وتفعيل المستخدمين", en: "Push notifications & activation" },
          { name: "Braze", logo: null, ar: "رحلات تفاعل وتراسل مخصص", en: "Engagement journeys & messaging" },
        ],
      },
    ],
  },

  // ===== Partners / trusted by =====
  partners: {
    eyebrow: { ar: "موثوق من", en: "Trusted by" },
    title: { ar: "علامات ومنصّات اشتغلت معها", en: "Brands & platforms I've worked with" },
    logos: [
      { name: "Salla", src: "/logos/salla.svg" },
      { name: "Ameen", src: "/logos/ameen.svg" },
      { name: "AbdihQT", src: "/logos/abdihqt.png" },
      { name: "Algooru", src: "/logos/partners/algooru.png" },
      { name: "SalahBreak", src: "/logos/salahbreak.svg" },
      { name: "Doolab", src: "/logos/doolab.svg" },
      { name: "Noon Academy", src: "/logos/partners/noon.png" },
      { name: "Edraak", src: "/logos/partners/edraak.jpg" },
    ],
  },

  // ===== Testimonials (real LinkedIn recommendations) =====
  testimonials: {
    eyebrow: { ar: "توصيات", en: "Recommendations" },
    items: [
      {
        ar: "محمد إيجابي ومتعاون، وقدرته على الربط بين الأقسام المختلفة ومهاراته التواصلية تميّزه فعلاً.",
        en: "Mohammed brings real positivity and a collaborative spirit, with strong communication skills that bridge different departments.",
        name: { ar: "عبدالله باحشوان", en: "Abdullah Bahshwan, LSSBB" },
        role: { ar: "Merchant Experience Operations Lead · Salla", en: "Merchant Experience Operations Lead · Salla" },
        href: "https://www.linkedin.com/in/abdullah-bahshwan-lssbb-68326b179/",
      },
      {
        ar: "محمد مدير منتج يفهم احتياجات التجار زين ويحوّلها لحلول عملية. أوصي فيه بقوة.",
        en: "Mohammed is a focused product manager who understands merchant needs and turns them into practical solutions. Highly recommend him.",
        name: { ar: "عبدالعزيز المقرن", en: "Abdulaziz Almuqrin" },
        role: { ar: "Manager of Customer Success · Salla", en: "Manager of Customer Success · Salla" },
        href: "https://www.linkedin.com/in/abdulaziz-almuqrin-786829170/",
      },
    ],
  },

  // ===== Education & Credentials =====
  credentials: {
    eyebrow: { ar: "التعليم والشهادات", en: "Education & Credentials" },
    title: { ar: "الأساس", en: "The foundation" },
    education: {
      school: { ar: "جامعة حفر الباطن", en: "University of Hafr AlBatin" },
      degree: { ar: "بكالوريوس هندسة البرمجيات", en: "BSc, Computer Software Engineering" },
      period: { ar: "أغسطس 2019 إلى يونيو 2024", en: "Aug 2019 → Jun 2024" },
    },
    certs: [
      {
        name: { ar: "Product Analytics", en: "Product Analytics" },
        issuer: { ar: "Product School", en: "Product School" },
        year: { ar: "ديسمبر 2025", en: "Dec 2025" },
      },
      {
        name: { ar: "Product Marketing Foundations", en: "Product Marketing Foundations" },
        issuer: { ar: "LinkedIn Learning", en: "LinkedIn Learning" },
        year: { ar: "مايو 2025", en: "May 2025" },
      },
      {
        name: { ar: "Product Launches", en: "Product Launches" },
        issuer: { ar: "Product School", en: "Product School" },
        year: { ar: "نوفمبر 2024", en: "Nov 2024" },
      },
    ],
    note: {
      ar: "الشهادات كاملة وموثّقة على LinkedIn.",
      en: "Full list, verified on LinkedIn.",
    },
    learning: {
      label: { ar: "بتعلّمه حاليًا", en: "Currently Learning" },
      items: [
        { ar: "AI Agents for Product Teams", en: "AI Agents for Product Teams" },
        { ar: "Growth Models for SaaS", en: "Growth Models for SaaS" },
        { ar: "Product-led Growth Systems", en: "Product-led Growth Systems" },
      ],
    },
  },

  // ===== Goal 2028 (signature block) =====
  goal: {
    eyebrow: { ar: "تفصيلة شخصية يعرفني فيها مجتمعي", en: "A personal detail my community knows me for" },
    title: { ar: "رينج روفر", en: "Range Rover" },
    year: "2028",
    image: "/rangerover.jpg",
    note: {
      ar: "بعيدًا عن الاجتماعات والجداول، عندي هدف fun يعرفه كثير من اللي حولي: رينج روفر 2028. ما هو جزء من هويتي المهنية، لكنه تفصيلة خفيفة تذكرني أن الرحلة لازم يكون فيها متعة وحلم شخصي بسيط. اللي يعرفني يعرف أن هذا الهدف صار ميم لطيف بيني وبين مجتمعي.",
      en: "Away from meetings and roadmaps, I have a fun goal a lot of people around me know about: a Range Rover by 2028. It's not part of my professional identity, just a light personal detail that reminds me the journey should have some fun and a simple dream in it too. If you know me, you know this one turned into a running joke between me and my community.",
    },
    // baseline % as of baselineDate (YYYY-MM); auto-grows +1% every 2 full months from there
    baselineProgress: 13,
    baselineDate: "2026-07",
    progressLabel: { ar: "التقدّم نحو الهدف", en: "Progress to goal" },
  },

  // ===== Work process =====
  process: {
    eyebrow: { ar: "طريقة العمل", en: "Work process" },
    title: { ar: "نظامي في بناء النمو", en: "My system for building growth" },
    steps: [
      { ar: "Signal", en: "Signal", arDesc: "ألتقط إشارات السوق والمستخدمين قبل أي قرار.", enDesc: "I capture market and user signals before any decision." },
      { ar: "Position", en: "Position", arDesc: "أصيغ الرسالة والقيمة بشكل واضح لا يحتاج شرح إضافي.", enDesc: "I shape the message and the value clearly, with no extra explanation needed." },
      { ar: "Build", en: "Build", arDesc: "أبني تجربة أو نموذج سريع عبر Vibe Coding بدون هدر.", enDesc: "I build a fast experience or prototype with Vibe Coding, no waste." },
      { ar: "Launch", en: "Launch", arDesc: "أطلق بقناة توزيع واضحة، لا مجرد نشر وانتظار.", enDesc: "I launch through a clear distribution channel, not just publish and wait." },
      { ar: "Measure", en: "Measure", arDesc: "أقيس التحويل والتبنّي والأثر، وأكرّر بحلقات قصيرة.", enDesc: "I measure conversion, adoption, and impact, then iterate in tight loops." },
    ],
  },

  // ===== FAQ =====
  faq: {
    eyebrow: { ar: "أسئلة شائعة", en: "FAQs" },
    items: [
      {
        q: { ar: "وش تشتغل عليه بالضبط؟", en: "What do you actually work on?" },
        a: { ar: "أعمل على تقاطع Product Growth، SaaS، AI، والمحتوى. أساعد المنتجات الرقمية على النمو عبر تحسين التجربة، الرسالة، القنوات، وسرعة التجريب.", en: "I work at the intersection of Product Growth, SaaS, AI, and content. I help digital products grow by improving the experience, the message, the channels, and the speed of experimentation." },
      },
      {
        q: { ar: "هل أنت Product Manager أو Growth؟", en: "Are you a Product Manager or Growth?" },
        a: { ar: "أنا في المنطقة بين الاثنين: Product Growth. أفكر كمدير منتج، أقرأ السوق كمسوق، وأنفذ كباني.", en: "I sit in between the two: Product Growth. I think like a PM, read the market like a marketer, and execute like a builder." },
      },
      {
        q: { ar: "هل تشتغل على مشاريع AI؟", en: "Do you work on AI projects?" },
        a: { ar: "نعم، أستخدم AI في بناء النماذج، تسريع التجارب، تحليل الإشارات، وتحويل الأفكار إلى أدوات قابلة للاستخدام.", en: "Yes. I use AI to build prototypes, speed up experiments, read signals, and turn ideas into usable tools." },
      },
      {
        q: { ar: "تاخذ مشاريع جانبية؟", en: "Do you take side projects?" },
        a: { ar: "نعم، فقط إذا كانت في SaaS، AI Products، Product Growth، أو Content-led Growth.", en: "Yes, only if it's in SaaS, AI products, Product Growth, or content-led growth." },
      },
      {
        q: { ar: "وش هدفك المهني؟", en: "What's your career goal?" },
        a: { ar: "أبغى أكون قائد منتج يبني أنظمة نمو، مو مجرد ميزات. الاتجاه طويل المدى هو قيادة منتجات SaaS و AI على مستوى تنفيذي.", en: "I want to be a product leader who builds growth systems, not just features. The long-term direction is leading SaaS and AI products at an executive level." },
      },
    ],
  },

  // ===== Contact =====
  contact: {
    eyebrow: { ar: "تواصل", en: "Get in touch" },
    title: { ar: "خلنا نبني نمو واضح", en: "Let's build clear growth" },
    note: {
      ar: "متاح لعدد محدود من استشارات Product Growth و AI Product Strategy. أساعدك في فهم المشكلة، تحسين التموضع، بناء تجربة أولية، أو تحويل موقعك أو منتجك إلى قناة اكتساب أوضح. مناسب أكثر لـ SaaS، EdTech، AI Products، وتطبيقات المحتوى أو المجتمعات.",
      en: "Available for a limited number of Product Growth and AI Product Strategy consultations. I can help you understand the problem, sharpen the positioning, build a first experience, or turn your site or product into a clearer acquisition channel. Best fit for SaaS, EdTech, AI products, and content or community apps.",
    },
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mo7albader" },
      { label: "Email", href: "mailto:hello@mo7albader.com" },
      { label: "X", href: "https://x.com/mo7albader" },
    ],
  },

  footer: {
    ar: "صمّمه وبناه محمد البدر",
    en: "Designed & built by Mohammed AlBader",
  },
} as const;
