import type { Lang } from "@/lib/data";
import type { Bi } from "@/lib/i18n";

export type { Bi };

/* ============================================================================
   Blog data layer
   ---------------------------------------------------------------------------
   Every post carries a full Arabic and English body. The index and the article
   template read whichever one matches the active language, so nothing on the
   blog depends on the visitor's language being Arabic.

   The posts below are PLACEHOLDER content, marked with `placeholder: true`.
   They exist so the layout, filters, search and pagination can be seen working
   end to end. Replace them one by one with real writing and drop the flag.
   ========================================================================== */

export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; id: string; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "quote"; text: string; src?: string }
  | { t: "callout"; title?: string; text: string }
  | { t: "figure"; caption: string };

export type CategoryId = "product" | "growth" | "ai" | "career";

export type BlogPost = {
  slug: string;
  category: CategoryId;
  /** ISO date, YYYY-MM-DD */
  date: string;
  readMin: number;
  featured?: boolean;
  /** true while the post is filler content rather than real writing */
  placeholder?: boolean;
  title: Bi;
  excerpt: Bi;
  body: { ar: Block[]; en: Block[] };
  faq?: { q: Bi; a: Bi }[];
};

/* ===== Categories ======================================================== */

export const categories: { id: CategoryId; label: Bi }[] = [
  { id: "product", label: { ar: "إدارة المنتج", en: "Product Management" } },
  { id: "growth", label: { ar: "النمو والاكتساب", en: "Growth & Acquisition" } },
  { id: "ai", label: { ar: "الذكاء الاصطناعي والبناء", en: "AI & Building" } },
  { id: "career", label: { ar: "المسار المهني", en: "Career" } },
];

export function categoryLabel(id: CategoryId, lang: Lang): string {
  return categories.find((c) => c.id === id)?.label[lang] ?? id;
}

/* ===== Author ============================================================ */

export const author = {
  name: { ar: "محمد البدر", en: "Mohammed AlBader" },
  role: { ar: "مدير منتج · سلة", en: "Product Manager · Salla" },
  initials: "MA",
  linkedin: "https://linkedin.com/in/mo7albader",
};

/* ===== UI strings ======================================================== */

export const blogUI = {
  brand: { ar: "محمد البدر", en: "Mohammed AlBader" },
  backToSite: { ar: "رجوع للموقع", en: "Back to site" },
  blog: { ar: "المدونة", en: "Blog" },
  indexTitle: {
    ar: "مقالات · بناء منتجات تنمو من نفسها",
    en: "Posts · Building products that grow themselves",
  },
  indexLead: {
    ar: "ملاحظات من داخل الشغل: إدارة المنتج، الاكتساب العضوي، الذكاء الاصطناعي، والمسار من مدير منتج إلى CPO.",
    en: "Notes from inside the work: product management, organic acquisition, AI, and the road from PM to CPO.",
  },
  allPosts: { ar: "كل المقالات", en: "All posts" },
  searchPlaceholder: { ar: "ابحث في المقالات…", en: "Search articles…" },
  readArticle: { ar: "اقرأ المقال", en: "Read the article" },
  minRead: { ar: "دقائق قراءة", en: "min read" },
  empty: {
    ar: "ما فيه مقال يطابق بحثك. جرّب كلمة ثانية أو شيل الفلتر.",
    en: "No article matches your search. Try another term or clear the filter.",
  },
  clear: { ar: "شيل الفلتر", en: "Clear filters" },
  previous: { ar: "السابق", en: "Previous" },
  next: { ar: "التالي", en: "Next" },
  onThisPage: { ar: "في هذه الصفحة", en: "On this page" },
  summarizeWithAI: { ar: "لخّصه بالذكاء الاصطناعي", en: "Summarize with AI" },
  openIn: { ar: "افتحه في", en: "Open in" },
  share: { ar: "شارك", en: "Share" },
  copyLink: { ar: "انسخ الرابط", en: "Copy link" },
  copied: { ar: "تم النسخ", en: "Copied" },
  faqTitle: { ar: "أسئلة متكررة", en: "Frequently asked questions" },
  moreReading: { ar: "اقرأ أيضاً", en: "Keep reading" },
  ctaTitle: { ar: "تبي نبني شي يصنع أثر؟", en: "Want to build something with impact?" },
  ctaLead: {
    ar: "أساعد فرق المنتج على النمو عبر المنتج والمحتوى والبيانات. خلنا نتكلم.",
    en: "I help product teams grow through product, content and data. Let's talk.",
  },
  ctaButton: { ar: "تواصل معي", en: "Get in touch" },
  placeholderNote: {
    ar: "هذا المقال محتوى تجريبي موضوع لعرض التصميم، وسيُستبدل بمحتوى حقيقي.",
    en: "This post is placeholder content used to demo the layout. Real writing will replace it.",
  },
} as const;

/* ===== Placeholder body builder ==========================================
   Keeps the filler posts short and obviously provisional while still giving
   the article template a realistic shape: several H2s for the table of
   contents, a list, a pull quote and a callout.
   ======================================================================== */

type Section = { id: string; ar: string; en: string };

const FILLER: Bi[] = [
  {
    ar: "هذي فقرة تجريبية موضوعة لتجربة تنسيق النص وطول السطر وارتفاع السطر داخل قالب المقال. راح تنستبدل بمحتوى حقيقي.",
    en: "This is a placeholder paragraph used to test text rhythm, line length and leading inside the article template. Real writing will replace it.",
  },
  {
    ar: "الفكرة من الهيكل إنه يشتغل قبل ما يوصل المحتوى، عشان الكتابة تصير آخر خطوة مو أول عائق.",
    en: "The point of shipping the shell first is that writing becomes the last step rather than the first blocker.",
  },
];

function placeholderBody(sections: Section[], lang: Lang): Block[] {
  const blocks: Block[] = [
    { t: "p", text: FILLER[0][lang] },
    { t: "p", text: FILLER[1][lang] },
  ];

  sections.forEach((s, i) => {
    blocks.push({ t: "h2", id: s.id, text: s[lang] });
    blocks.push({ t: "p", text: FILLER[i % FILLER.length][lang] });

    if (i === 0) {
      blocks.push({
        t: "ul",
        items:
          lang === "ar"
            ? ["نقطة أولى تجريبية.", "نقطة ثانية تجريبية.", "نقطة ثالثة تجريبية."]
            : ["First placeholder point.", "Second placeholder point.", "Third placeholder point."],
      });
    }

    if (i === 1) {
      blocks.push({
        t: "quote",
        text:
          lang === "ar"
            ? "اقتباس تجريبي يوضح شكل الاقتباس داخل المقال."
            : "A placeholder pull quote showing how quotes render inside an article.",
      });
    }

    if (i === 2) {
      blocks.push({
        t: "callout",
        title: lang === "ar" ? "خلاصة" : "Takeaway",
        text:
          lang === "ar"
            ? "صندوق تجريبي للتنبيهات والخلاصات داخل المقال."
            : "A placeholder callout box for takeaways and asides inside an article.",
      });
    }
  });

  return blocks;
}

function placeholderFAQ(lang: Lang, n = 3) {
  return Array.from({ length: n }, (_, i) =>
    lang === "ar"
      ? { q: `سؤال تجريبي رقم ${i + 1}؟`, a: "جواب تجريبي قصير يوضح شكل قسم الأسئلة المتكررة." }
      : { q: `Placeholder question ${i + 1}?`, a: "A short placeholder answer showing how the FAQ section renders." }
  );
}

function mk(input: {
  slug: string;
  category: CategoryId;
  date: string;
  readMin: number;
  featured?: boolean;
  title: Bi;
  excerpt: Bi;
  sections: Section[];
}): BlogPost {
  return {
    slug: input.slug,
    category: input.category,
    date: input.date,
    readMin: input.readMin,
    featured: input.featured,
    placeholder: true,
    title: input.title,
    excerpt: input.excerpt,
    body: {
      ar: placeholderBody(input.sections, "ar"),
      en: placeholderBody(input.sections, "en"),
    },
    faq: placeholderFAQ("ar").map((arItem, i) => {
      const enItem = placeholderFAQ("en")[i];
      return { q: { ar: arItem.q, en: enItem.q }, a: { ar: arItem.a, en: enItem.a } };
    }),
  };
}

const S = (id: string, ar: string, en: string): Section => ({ id, ar, en });

/* ===== Posts ============================================================= */

export const posts: BlogPost[] = [
  mk({
    slug: "plg-playbook-saudi-merchants",
    category: "growth",
    date: "2026-08-18",
    readMin: 9,
    featured: true,
    title: {
      ar: "كيف تبني محرّك اكتساب عضوي لتجّار السعودية",
      en: "Building an organic acquisition engine for Saudi merchants",
    },
    excerpt: {
      ar: "من صفحة منتج واحدة إلى نظام صفحات يجيب تسجيلات كل يوم بدون فريق مبيعات.",
      en: "From one product page to a page system that brings signups daily without a sales team.",
    },
    sections: [
      S("why-plg", "ليش PLG وليس المبيعات", "Why PLG and not sales"),
      S("page-system", "نظام الصفحات", "The page system"),
      S("measuring", "كيف تقيس الأثر", "How to measure impact"),
      S("pitfalls", "أخطاء شائعة", "Common pitfalls"),
    ],
  }),
  mk({
    slug: "problem-statement-that-survives",
    category: "product",
    date: "2026-08-11",
    readMin: 7,
    title: {
      ar: "بيان المشكلة اللي يعيش بعد الاجتماع",
      en: "The problem statement that survives the meeting",
    },
    excerpt: {
      ar: "أغلب بيانات المشكلة تنهار أول ما تُسأل «وش الدليل؟». هذي طريقة تكتبها فيها مرة وحدة.",
      en: "Most problem statements collapse the moment someone asks for evidence. Here is how to write one that holds.",
    },
    sections: [
      S("anatomy", "تشريح البيان", "Anatomy of a statement"),
      S("evidence", "الدليل قبل الحل", "Evidence before solution"),
      S("review", "كيف تراجعه", "How to review it"),
    ],
  }),
  mk({
    slug: "ai-in-the-pm-loop",
    category: "ai",
    date: "2026-08-04",
    readMin: 8,
    title: {
      ar: "الذكاء الاصطناعي داخل حلقة عمل مدير المنتج",
      en: "AI inside the product manager's loop",
    },
    excerpt: {
      ar: "مو أداة كتابة، بل طبقة تسريع في كل مرحلة: البحث، التحقق، الصياغة، والقياس.",
      en: "Not a writing tool, but an acceleration layer at every stage: research, validation, drafting, measurement.",
    },
    sections: [
      S("where-it-helps", "وين يفيد فعلاً", "Where it actually helps"),
      S("where-it-hurts", "وين يضر", "Where it hurts"),
      S("setup", "كيف تجهّز نفسك", "Setting yourself up"),
    ],
  }),
  mk({
    slug: "seo-geo-for-saas-arabic",
    category: "growth",
    date: "2026-07-28",
    readMin: 11,
    title: {
      ar: "SEO و GEO لمنتجات SaaS بالعربي",
      en: "SEO and GEO for Arabic SaaS products",
    },
    excerpt: {
      ar: "الترتيب في جوجل شي، والظهور داخل إجابات الذكاء الاصطناعي شي ثاني. الاثنين لازم يتبنون بنفس الصفحة.",
      en: "Ranking on Google is one thing, showing up inside AI answers is another. Both get built on the same page.",
    },
    sections: [
      S("two-engines", "محرّكان لا واحد", "Two engines, not one"),
      S("structure", "بنية الصفحة", "Page structure"),
      S("arabic-nuance", "خصوصية العربي", "The Arabic nuance"),
      S("tracking", "المتابعة", "Tracking"),
    ],
  }),
  mk({
    slug: "road-to-cpo-2030",
    category: "career",
    date: "2026-07-21",
    readMin: 6,
    title: { ar: "الطريق إلى CPO 2030", en: "The road to CPO by 2030" },
    excerpt: {
      ar: "خطة مكتوبة بمراحل سنوية، وش نجح فيها وش تغيّر، وليش الكتابة نفسها جزء من الخطة.",
      en: "A written plan in yearly stages, what worked, what changed, and why writing it down is part of the plan.",
    },
    sections: [
      S("the-ladder", "السلّم", "The ladder"),
      S("skill-gaps", "الفجوات", "Skill gaps"),
      S("public-work", "الشغل العلني", "Working in public"),
    ],
  }),
  mk({
    slug: "naming-features-in-arabic",
    category: "product",
    date: "2026-07-14",
    readMin: 5,
    title: { ar: "تسمية الميزات بالعربي", en: "Naming features in Arabic" },
    excerpt: {
      ar: "الاسم الصح يوفّر عليك نص صفحة شرح. والاسم الغلط يخليك تشرح للأبد.",
      en: "The right name saves you half a page of explanation. The wrong one makes you explain forever.",
    },
    sections: [
      S("rules", "ثلاث قواعد", "Three rules"),
      S("testing", "كيف تختبر الاسم", "Testing a name"),
      S("examples", "أمثلة", "Examples"),
    ],
  }),
  mk({
    slug: "100-stores-lessons",
    category: "product",
    date: "2026-07-07",
    readMin: 10,
    title: { ar: "ما تعلمته من بناء 100 متجر", en: "What building 100 stores taught me" },
    excerpt: {
      ar: "ثلاث سنوات كمزوّد خدمة قبل ما أدخل إدارة المنتج، وأهم درس ما كان تقني.",
      en: "Three years as a service provider before moving into product, and the biggest lesson was not technical.",
    },
    sections: [
      S("the-pattern", "النمط المتكرر", "The repeating pattern"),
      S("what-merchants-say", "وش يقول التاجر فعلاً", "What merchants actually say"),
      S("carrying-it-over", "كيف نقلتها للمنتج", "Carrying it into product"),
    ],
  }),
  mk({
    slug: "content-led-growth-300k",
    category: "growth",
    date: "2026-06-30",
    readMin: 9,
    title: { ar: "نمو بالمحتوى: من صفر إلى 300 ألف طالب", en: "Content-led growth: zero to 300K students" },
    excerpt: {
      ar: "قناة تعليمية بنت منصة، مو العكس. هذي الميكانيكا اللي خلّت المحتوى يصير قناة اكتساب.",
      en: "An education channel that built a platform, not the other way round. Here is the mechanic behind it.",
    },
    sections: [
      S("the-funnel", "القمع", "The funnel"),
      S("cadence", "الإيقاع", "Cadence"),
      S("conversion", "التحويل", "Conversion"),
    ],
  }),
  mk({
    slug: "prd-that-nobody-reads",
    category: "product",
    date: "2026-06-23",
    readMin: 6,
    title: { ar: "الـ PRD اللي ما أحد يقراه", en: "The PRD nobody reads" },
    excerpt: {
      ar: "لو المستند طويل ومحد فتحه، المشكلة مو في الفريق. المشكلة في إن المستند يشرح قرار ما اتخذ.",
      en: "If the doc is long and unopened, the team is not the problem. The doc is explaining a decision never made.",
    },
    sections: [
      S("symptom", "العرض", "The symptom"),
      S("root-cause", "السبب", "The root cause"),
      S("fix", "الحل", "The fix"),
    ],
  }),
  mk({
    slug: "shipping-with-claude-code",
    category: "ai",
    date: "2026-06-16",
    readMin: 7,
    title: { ar: "أبني منتجات كاملة مع Claude Code", en: "Shipping whole products with Claude Code" },
    excerpt: {
      ar: "تحدي الخمسين أداة: وش صار قابل للبناء في يوم واحد، ووش لا يزال يحتاج مهندس.",
      en: "The 50 tools challenge: what became buildable in a day, and what still needs an engineer.",
    },
    sections: [
      S("setup", "الإعداد", "The setup"),
      S("what-works", "وش يشتغل", "What works"),
      S("limits", "الحدود", "The limits"),
    ],
  }),
  mk({
    slug: "metrics-dictionary",
    category: "growth",
    date: "2026-06-09",
    readMin: 8,
    title: { ar: "قاموس الميتركس: لماذا يحتاجه كل فريق", en: "A metrics dictionary every team needs" },
    excerpt: {
      ar: "لما يكون لكل واحد تعريفه الخاص لـ«التحويل»، ما عندك بيانات، عندك جدال.",
      en: "When everyone has their own definition of conversion, you do not have data, you have an argument.",
    },
    sections: [
      S("definitions", "التعريفات", "Definitions"),
      S("drivers", "المحرّكات", "Drivers"),
      S("guardrails", "الحواجز", "Guardrails"),
    ],
  }),
  mk({
    slug: "linkedin-as-a-pm-asset",
    category: "career",
    date: "2026-06-02",
    readMin: 6,
    title: { ar: "لينكدإن كأصل مهني لمدير المنتج", en: "LinkedIn as a product manager's asset" },
    excerpt: {
      ar: "مو للوظيفة الجاية، بل لأن الكتابة العلنية تجبرك ترتب تفكيرك.",
      en: "Not for the next job, but because writing in public forces your thinking into order.",
    },
    sections: [
      S("why-write", "ليش تكتب", "Why write"),
      S("what-to-write", "وش تكتب", "What to write"),
      S("rhythm", "الإيقاع", "The rhythm"),
    ],
  }),
  mk({
    slug: "validating-before-building",
    category: "product",
    date: "2026-05-26",
    readMin: 7,
    title: { ar: "التحقق قبل البناء", en: "Validating before building" },
    excerpt: {
      ar: "أسرع طريقة تعرف إن الفكرة ما تستاهل هي إنك تحاول تبيعها قبل ما تبنيها.",
      en: "The fastest way to learn an idea is not worth it is trying to sell it before building it.",
    },
    sections: [
      S("signal", "الإشارة", "The signal"),
      S("cheap-tests", "اختبارات رخيصة", "Cheap tests"),
      S("deciding", "القرار", "Deciding"),
    ],
  }),
  mk({
    slug: "ai-agents-for-product-teams",
    category: "ai",
    date: "2026-05-19",
    readMin: 9,
    title: { ar: "وكلاء الذكاء الاصطناعي لفِرق المنتج", en: "AI agents for product teams" },
    excerpt: {
      ar: "وكيل لكل مرحلة بدل أداة عامة لكل شي. كيف تقسّم الشغل وين يصير الوكيل مفيد.",
      en: "An agent per stage instead of one general tool for everything. How to split the work so agents pay off.",
    },
    sections: [
      S("split", "تقسيم الشغل", "Splitting the work"),
      S("context", "السياق", "Context"),
      S("review", "المراجعة", "Review"),
    ],
  }),
];

/* ===== Selectors ========================================================= */

export const POSTS_PER_PAGE = 9;

export function sortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function featuredPost(): BlogPost {
  return posts.find((p) => p.featured) ?? sortedPosts()[0];
}

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function relatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = sortedPosts().filter((p) => p.slug !== post.slug && p.category === post.category);
  const rest = sortedPosts().filter((p) => p.slug !== post.slug && p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function tableOfContents(post: BlogPost, lang: Lang) {
  return post.body[lang]
    .filter((b): b is Extract<Block, { t: "h2" }> => b.t === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}

/* ===== Formatting ========================================================
   Month names are spelled out here rather than via Intl so the server render
   and the browser render always agree, whatever ICU data each one ships.
   ======================================================================== */

const MONTHS_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MONTHS_AR = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر",
];

export function formatDate(iso: string, lang: Lang): string {
  const [y, m, d] = iso.split("-").map(Number);
  const month = (lang === "ar" ? MONTHS_AR : MONTHS_EN)[m - 1];
  return lang === "ar" ? `${d} ${month} ${y}` : `${month} ${d}, ${y}`;
}

export const SITE_URL = "https://mo7albader.com";

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}
