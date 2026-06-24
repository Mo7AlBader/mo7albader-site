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
    { id: "journey", ar: "الخبرة", en: "Experience" },
    { id: "goal", ar: "الهدف", en: "Goal" },
    { id: "contact", ar: "تواصل", en: "Contact" },
  ],

  // ===== Hero =====
  hero: {
    available: { ar: "متاح لاستشارات منتج · يوم بالأسبوع", en: "Product advisory · 1 day/week" },
    location: { ar: "الرياض، السعودية", en: "Riyadh, Saudi Arabia" },
    greeting: { ar: "أنا محمد البدر،", en: "I'm Mohammed AlBader," },
    line: {
      ar: "مدير منتج. آخذ الفكرة من صفحة بيضاء إلى منتج يستخدمه الملايين.",
      en: "Product Manager. I take ideas from a blank page to products millions use.",
    },
    cta: { ar: "تواصل معي", en: "Get in touch" },
    ctaHref: "#contact",
    work: { ar: "شوف أعمالي", en: "View my work" },
    workHref: "#projects",
    // proof above the fold (CRO P6/P7)
    proof: [
      { value: "+2M", ar: "مستخدم", en: "users" },
      { value: "+300K", ar: "طالب", en: "students" },
      { value: "+6M", ar: "مشاهدة", en: "views" },
      { value: "+8", ar: "سنوات بناء", en: "yrs building" },
    ],
  },

  // ===== Tickers (marquee bands) =====
  tickers: {
    work: { ar: "أعمال مختارة", en: "Selected Work" },
    cta: { ar: "خلنا نبني شي يصنع أثر", en: "Let's build something with impact" },
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
      ar: "مدير منتجات وباني من الرياض",
      en: "PM & builder from Riyadh",
    },
    paragraphs: [
      {
        ar: "بديت مهندس برمجيات، وصرت مدير منتجات لأني أحب أبني أشياء يستخدمها الناس فعلاً. أول مشروع كان وأنا بعمر 17: منصة AbdihQT التعليمية، بنيتها من الصفر وبدون تمويل، ووصلت لأكثر من 300 ألف طالب و6 مليون مشاهدة.",
        en: "I started as a software engineer and became a product manager because I love building things people actually use. My first build was at 17: AbdihQT, an education platform I bootstrapped from zero to 300K+ students and 6M+ views.",
      },
      {
        ar: "اليوم أقود الاكتساب واستراتيجية الموقع في سلة، أكبر منصة تجارة إلكترونية في السعودية. شغلي نمو مبني على البيانات، وقراري دايم أوله التاجر. وفلسفتي بسيطة: التنفيذ قبل التخطيط، والإشارة قبل الضجيج.",
        en: "Today I lead acquisition and website strategy at Salla, Saudi Arabia's largest e-commerce platform. Data-driven growth, merchant-first decisions. My philosophy is simple: execution over planning, signal over noise.",
      },
      {
        ar: "وباختصار: أي مشروع أنضمّ له أكون مكسب له، مو مجرد منفّذ. آخذ الأفكار من ورق وأطلّعها نتائج تتقاس، وأملك شغلي من أوله لآخره.",
        en: "In short: any project I join, I'm an asset to it, not just a pair of hands. I turn ideas into measurable results, and I own my work end to end.",
      },
    ],
    tags: ["Product Management", "Growth & Acquisition", "SaaS", "UI/UX", "Web Dev", "Content & SEO"],
  },

  // ===== Now =====
  now: {
    eyebrow: { ar: "حالياً أشتغل على", en: "Currently working on" },
    items: [
      {
        ar: "مدير منتج في سلة، أملك الاكتساب واستراتيجية الموقع والمحتوى.",
        en: "Product Manager at Salla, owning acquisition, website strategy and content.",
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
        cover: "/covers/abdihqt.png",
        ar: "منصة تعليمية ذاتية التمويل بدأتها في سن 17، فيها أكثر من 300 ألف طالب و6 مليون مشاهدة على يوتيوب.",
        en: "Bootstrapped education platform I started at 17, now with 300K+ students and 6M+ YouTube views.",
        tags: ["EdTech", "Founder", "Since 2018"],
        href: "https://abdihqt.com",
      },
      {
        name: "Salla",
        logo: "/logos/salla.svg",
        cover: "/covers/salla.png",
        ar: "إدارة منتج وتسويق للمنتجات الرقمية في سلة: أطلقت «سوق الجملة» و«كاشير سلة»، وأقود توجّه الاكتساب حالياً.",
        en: "Product & product-marketing for Salla's digital products: launched the Wholesale Market and Salla Cashier, now leading Acquisition.",
        tags: ["Product", "Acquisition", "2024 →"],
        href: "https://salla.com",
      },
      {
        name: "Ameen",
        logo: "/logos/ameen.svg",
        cover: "/covers/ameen.png",
        ar: "متطوّع كمدير منتج. التطبيق تجاوز مليوني مستخدم و+14 ألف تقييم، وتصدّر متجر التطبيقات.",
        en: "Volunteer PM. The app surpassed 2M users with 14K+ ratings and topped the App Store.",
        tags: ["Volunteer PM", "1M users", "#1 App Store"],
        href: "https://ameenapp.org",
      },
      {
        name: "SalahBreak",
        logo: "/logos/salahbreak.svg",
        cover: "/covers/salahbreak.png",
        ar: "تطبيق يعيد تعريف الصلاة كـ«استراحة صلاة» في بيئة العمل، مع تكامل عبر iOS وSlack وApple Watch وغيرها.",
        en: "An app that reframes prayer as a workplace “prayer break,” with integrations across iOS, Slack, Apple Watch and more.",
        tags: ["iOS", "Product", "Building"],
        href: "https://salahbreak.com",
      },
      {
        name: "50 Tools Challenge",
        ar: "تحدٍّ شخصي لبناء 50 أداة منتج عبر Claude API، أستكشف فيه حدود الـ Vibe Coding.",
        en: "A personal challenge to build 50 product tools with the Claude API, exploring the edges of Vibe Coding.",
        tags: ["Claude API", "Builder", "Ongoing"],
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
        title: { ar: "مدير منتج / مدير تسويق منتج", en: "Product Manager / Product Marketing Manager" },
        company: { ar: "سلة", en: "Salla" },
        logo: "/logos/salla.svg",
        start: "2024-01",
        end: null,
        impact: null,
        stores: false,
        ar: "أقود استراتيجية المنتج وتسويق المنتج في قطاع تجارة المنتجات الرقمية بسلة. أطلقت «سوق الجملة» و«كاشير سلة»، وأقود حالياً توجّه الاكتساب (Acquisition).",
        en: "I lead product & product-marketing strategy for the digital-products commerce sector at Salla. Launched the Wholesale Market and Salla Cashier; now leading the Acquisition direction.",
      },
      {
        title: { ar: "مؤسس", en: "Founder" },
        company: { ar: "AbdihQT", en: "AbdihQT" },
        logo: "/logos/abdihqt.png",
        start: "2018-02",
        end: null,
        impact: null,
        stores: false,
        ar: "احتياجي للاستعداد للقدرات والتحصيلي خلّاني أبني مجتمعاً، تحوّل إلى منتج، ثم إلى منظومة وكيان استفاد منه +300 ألف طالب و+6 مليون مشاهدة على يوتيوب.",
        en: "My own need to prep for Qudurat & Tahsili led me to build a community that became a product, then a full system used by 300K+ students with 6M+ YouTube views.",
      },
      {
        title: { ar: "مدير منتج (متطوّع)", en: "Product Manager (Volunteer)" },
        company: { ar: "آمين", en: "Ameen" },
        logo: "/logos/ameen.svg",
        start: "2025-02",
        end: null,
        impact: { ar: "+2 مليون مستخدم · +14 ألف تقييم", en: "2M+ users · 14K+ ratings" },
        stores: true,
        ar: "بنيت الأذكار والمصحف والرئيسية واختصاراتها والخدمات، تصوّراً ونظاماً ومنتجاً وتجربة استخدام.",
        en: "Built Athkar, the Mushaf, the Home and its shortcuts, and Services, owning the concept, the system, the product and the UX.",
      },
      {
        title: { ar: "مستشار نمو", en: "Growth Consultant" },
        company: { ar: "Doolab Agency", en: "Doolab Agency" },
        logo: "/logos/doolab.svg",
        start: "2025-11",
        end: "2026-06",
        impact: null,
        stores: false,
        ar: "ساعدت دولاب في النمو والتوسّع وإعادة تموضع خدماتها، وقيّمت مشاريعها وحسّنت خطط إطلاقها. من أبرز اللي اشتغلت عليه: Tecno Mobile، bxstore، بندر بطاطا، ودافور.",
        en: "Helped Doolab grow, expand and reposition its services, evaluating its projects and sharpening their launch plans. Highlights I worked on: Tecno Mobile, bxstore, Bandar Batata, and Dafoor.",
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
        arDesc: "أكتشف المشكلة الصح قبل الحل، وأبني رودماب يحرّك المستخدم والإيراد مع بعض.",
        enDesc: "I find the right problem before the solution, then build a roadmap that moves both the user and the revenue.",
      },
      {
        ar: "الاكتساب و PLG",
        en: "Acquisition & PLG",
        arDesc: "أحوّل الزوار إلى مستخدمين عبر SEO/GEO ونمو مدفوع بالمنتج، ونمو يبان على الأرقام.",
        enDesc: "I turn visitors into users with SEO/GEO and product-led growth, growth you can see in the numbers.",
      },
      {
        ar: "المحتوى والسرد",
        en: "Content & Narrative",
        arDesc: "رسائل تبيع: من صفحة الهبوط إلى قصة النجاح، محتوى يحوّل مو بس يوصف.",
        enDesc: "Messaging that sells: from landing pages to success stories, content that converts, not just describes.",
      },
      {
        ar: "البناء السريع",
        en: "Rapid Building",
        arDesc: "من الفكرة لنموذج شغّال في أيام عبر Vibe Coding، فتختبر بسرعة وتقرّر بثقة.",
        enDesc: "From idea to a working prototype in days with Vibe Coding, so you test fast and decide with confidence.",
      },
    ],
  },

  // ===== Strengths (CliftonStrengths · Gallup) =====
  strengths: {
    eyebrow: { ar: "نقاط القوة", en: "Strengths" },
    source: { ar: "CliftonStrengths® · Gallup · 2024", en: "CliftonStrengths® · Gallup · 2024" },
    title: { ar: "أقوى ٥ مواهب فطرية", en: "My top 5 natural talents" },
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
    items: [
      { name: "Claude", logo: null, ar: "توليد المحتوى وبناء الأدوات", en: "Content & tooling" },
      { name: "ChatGPT", logo: null, ar: "بحث وصياغة وعصف أفكار", en: "Research & drafting" },
      { name: "Manus AI", logo: "/logos/tools/manus.png", ar: "وكيل ذكاء ينجز المهام", en: "Agentic task runner" },
      { name: "Antigravity", logo: "/logos/tools/antigravity.png", ar: "بيئة برمجة وكيلة", en: "Agentic coding IDE" },
      { name: "Cursor", logo: "/logos/tools/cursor.svg", ar: "محرّر أكواد بالذكاء الاصطناعي", en: "AI-native code editor" },
      { name: "Next.js", logo: null, ar: "تطبيقات React سريعة", en: "Fast React apps" },
      { name: "Figma", logo: null, ar: "تصميم الواجهات وأنظمتها", en: "UI & design systems" },
      { name: "Framer", logo: null, ar: "بناء ونشر مواقع تفاعلية", en: "Ship interactive sites" },
      { name: "Photoshop", logo: null, ar: "معالجة الصور والأصول", en: "Imagery & assets" },
      { name: "Notion", logo: "/logos/tools/notion.svg", ar: "توثيق ووثائق المنتج", en: "Docs & product specs" },
      { name: "WordPress", logo: "/logos/tools/wordpress.svg", ar: "مواقع ومدوّنات المحتوى", en: "Content sites & blogs" },
      { name: "Webflow", logo: "/logos/tools/webflow.svg", ar: "صفحات هبوط بدون كود", en: "No-code landing pages" },
      { name: "GA4", logo: "/logos/tools/ga.svg", ar: "تحليلات المنتج والاكتساب", en: "Product & acquisition analytics" },
      { name: "Mixpanel", logo: "/logos/tools/mixpanel.svg", ar: "قياس الإيفنتات وتقارير النمو", en: "Event analytics & growth reports" },
    ],
  },

  // ===== Partners / trusted by =====
  partners: {
    eyebrow: { ar: "موثوق من", en: "Trusted by" },
    title: { ar: "علامات ومنصّات اشتغلت معها", en: "Brands & platforms I've worked with" },
    logos: [
      { name: "Salla", src: "/logos/salla.svg" },
      { name: "Noon Academy", src: "/logos/partners/noon.png" },
      { name: "Ameen", src: "/logos/ameen.svg" },
      { name: "Doolab", src: "/logos/doolab.svg" },
      { name: "SalahBreak", src: "/logos/salahbreak.svg" },
      { name: "Algooru", src: "/logos/partners/algooru.png" },
      { name: "Najd Water", src: "/logos/partners/najd.png" },
      { name: "Edraak", src: "/logos/partners/edraak.jpg" },
      { name: "Alnoj Oud", src: "/logos/partners/alnoj.jpg" },
      { name: "Lamha", src: "/logos/partners/lamha.png" },
      { name: "AbdihQT", src: "/logos/abdihqt.png" },
      { name: "مجرة أبدع", src: "/logos/partners/majarah.png" },
      { name: "Moamen Academy", src: "/logos/partners/moamen.jpg" },
      { name: "Mojrm Games", src: "/logos/partners/mojrm.jpg" },
    ],
  },

  // ===== Testimonials (placeholder, replace with real quotes) =====
  testimonials: {
    eyebrow: { ar: "آراء", en: "Testimonial" },
    items: [
      {
        ar: "محمد يفهم مساحة المشكلة قبل ما يقفز للحل، وينفّذ بسرعة. أثره يبان على الأرقام.",
        en: "Mohammed understands the problem space before jumping to a solution, and ships fast. His impact shows in the numbers.",
        name: { ar: "اسم العميل", en: "Client name" },
        role: { ar: "مؤسس · شركة", en: "Founder · Company" },
      },
      {
        ar: "تعاون احترافي ونتائج تفوق التوقّع. واضح، سريع، ومركّز على المستخدم.",
        en: "Professional to work with and results beyond expectation. Clear, fast, user-focused.",
        name: { ar: "اسم العميل", en: "Client name" },
        role: { ar: "قائد منتج · منصة", en: "Product Lead · Platform" },
      },
      {
        ar: "من الفكرة للإطلاق في وقت قياسي وبجودة عالية. أنصح فيه بقوة.",
        en: "From idea to launch in record time, at high quality. Highly recommended.",
        name: { ar: "اسم العميل", en: "Client name" },
        role: { ar: "مهندس · فريق", en: "Engineer · Team" },
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
    title: { ar: "رينج روفر", en: "Range Rover" },
    year: "2028",
    image: "/rangerover.jpg",
    note: {
      ar: "هدف واحد واضح أشتغل له بنظام، خطوة خطوة. لسه في أول الطريق، بس ماشي.",
      en: "One clear target I'm working toward on a system, step by step. Still early, but it's moving.",
    },
    progress: 15,
    progressLabel: { ar: "التقدّم نحو الهدف", en: "Progress to goal" },
  },

  // ===== Work process =====
  process: {
    eyebrow: { ar: "طريقة العمل", en: "Work process" },
    title: { ar: "من المشكلة إلى الأثر", en: "From problem to impact" },
    steps: [
      { ar: "اكتشاف المشكلة", en: "Discover", arDesc: "أفهم الهدف والمستخدم قبل أي حل، بالبيانات والإشارات.", enDesc: "Understand the goal and user before any solution. Data and signal first." },
      { ar: "التحقق والتأطير", en: "Validate & frame", arDesc: "أصيغ المشكلة وأحدّد المقاييس التي تحرّك القرار.", enDesc: "Frame the problem and define the metrics that drive the decision." },
      { ar: "البناء السريع", en: "Build fast", arDesc: "نماذج وإطلاق سريع عبر Vibe Coding بدون هدر.", enDesc: "Prototypes and fast shipping with Vibe Coding, no waste." },
      { ar: "القياس والتكرار", en: "Measure & iterate", arDesc: "أتتبّع الأثر على الأرقام وأكرّر بحلقات قصيرة.", enDesc: "Track impact on the numbers and iterate in tight loops." },
    ],
  },

  // ===== FAQ =====
  faq: {
    eyebrow: { ar: "أسئلة شائعة", en: "FAQs" },
    items: [
      {
        q: { ar: "ليش أشتغل معك؟", en: "Why work with you?" },
        a: { ar: "لأني باني فعلي مو مستشار نظري. أرقامي تتكلم: ملايين المستخدمين ومنتجات أطلقتها بيدي، وأجي بعقلية مالك يهمّه النتيجة قبل أي شي.", en: "Because I'm a builder, not a theorist. The numbers speak: millions of users and products I shipped myself, and I bring an owner's mindset focused on the result." },
      },
      {
        q: { ar: "وش تشتغل عليه بالضبط؟", en: "What do you actually work on?" },
        a: { ar: "إدارة المنتجات والاكتساب واستراتيجية الموقع في سلة، وأبني منتجات وأدوات شخصية على الجنب.", en: "Product management, acquisition and website strategy at Salla, plus building personal products and tools." },
      },
      {
        q: { ar: "تاخذ مشاريع جانبية؟", en: "Do you take side projects?" },
        a: { ar: "نعم، استشارات منتج فقط، يوم واحد في الأسبوع، ولمشاريع لها أثر واضح.", en: "Yes, product advisory only, one day a week, for work with clear impact." },
      },
      {
        q: { ar: "كيف أتواصل معك؟", en: "How do I reach you?" },
        a: { ar: "عبر LinkedIn أو الإيميل تحت، وأرد بأسرع وقت.", en: "Via LinkedIn or the email below, and I reply fast." },
      },
      {
        q: { ar: "وش هدفك المهني؟", en: "What's your career goal?" },
        a: { ar: "الطموح أكون CPO، بمسار واضح خطوة بخطوة.", en: "Becoming a CPO, on a clear step-by-step track." },
      },
    ],
  },

  // ===== Contact =====
  contact: {
    eyebrow: { ar: "تواصل", en: "Get in touch" },
    title: { ar: "خلنا نبني شي يصنع أثر", en: "Let's build something with impact" },
    note: {
      ar: "متاح لاستشارات المنتج فقط، يوم واحد في الأسبوع. تجيك خبرة باني وأرقام حقيقية، مو نظريات. اكتب لي وبردّ عليك بسرعة.",
      en: "Available for product advisory only, one day a week. You get a builder's experience and real numbers, not theory. Drop me a line and I'll reply fast.",
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
