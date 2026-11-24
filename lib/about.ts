// Public, professional facts only. Every answer is already on the site (lib/data.ts).
// No family, age, address or private details. Used for the /about page and its FAQPage schema.
import type { Bi } from "@/lib/i18n";

export type QA = { q: Bi; a: Bi };

export const aboutIntro: Bi = {
  ar: "محمد البدر مدير منتج سعودي في سلة، ومؤسس منصة AbdihQT التعليمية. هذي الصفحة تجاوب على الأسئلة الأكثر تكرارًا عنه.",
  en: "Mohammed AlBader is a Saudi Product Manager at Salla and the founder of the AbdihQT education platform. This page answers the questions people ask about him most.",
};

export const aboutQA: QA[] = [
  {
    q: { ar: "من هو محمد البدر مدير المنتج؟", en: "Who is Mohammed AlBader, the Product Manager?" },
    a: {
      ar: "محمد البدر مدير منتج سعودي مقره الرياض. يبني وينمّي منتجات SaaS عبر المنتج والمحتوى والبيانات والذكاء الاصطناعي. يعمل في سلة، ومؤسس AbdihQT، منصة تعليمية بدأت عام 2018 ووصلت لأكثر من 300 ألف طالب.",
      en: "Mohammed AlBader is a Saudi Product Manager based in Riyadh. He builds and grows SaaS products through product, content, data and AI. He works at Salla and founded AbdihQT, an education platform that started in 2018 and reached 300K+ students.",
    },
  },
  {
    q: { ar: "وين يشتغل محمد البدر؟", en: "Where does Mohammed AlBader work?" },
    a: {
      ar: "يعمل مدير منتج في سلة، أكبر منصة تجارة إلكترونية في السعودية، ويدير المنتج والنمو والاكتساب. يقود استراتيجية المنتج والنمو عبر قطاعين تجاريين يضمان أكثر من 2,000 تاجر.",
      en: "He works as a Product Manager at Salla, Saudi Arabia's largest e-commerce platform, covering product, growth and acquisition. He leads product and growth strategy across two business sectors with 2,000+ merchants.",
    },
  },
  {
    q: { ar: "من مؤسس AbdihQT؟", en: "Who founded AbdihQT?" },
    a: {
      ar: "أسسه محمد البدر عام 2018 من حاجته الشخصية للاستعداد لاختباري القدرات والتحصيلي. تحوّل من مجتمع تعليمي إلى منظومة كاملة: أكثر من 300 ألف طالب، وأكثر من 6 ملايين مشاهدة على يوتيوب، وأكثر من 26 ألف دورة وكتاب إلكتروني مباع.",
      en: "Mohammed AlBader founded it in 2018, out of his own need to prepare for the Qudurat and Tahsili exams. It grew from a learning community into a full ecosystem: 300K+ students, 6M+ YouTube views, and 26K+ courses and e-books sold.",
    },
  },
  {
    q: { ar: "وش أبرز إنجازات محمد البدر؟", en: "What are Mohammed AlBader's key achievements?" },
    a: {
      ar: "في سلة ساهم في نمو GMV بنسبة 150% ونمو التبنّي بنسبة 200% خلال أول أسبوعين من إطلاق «كاشير سلة». ساهم في تطبيق آمين الذي وصل لأكثر من مليوني مستخدم وتصدّر متجر التطبيقات. وبنى أكثر من 100 متجر على سلة قبل انضمامه لها.",
      en: "At Salla he contributed to 150% GMV growth and 200% adoption growth in the first two weeks of the Salla Cashier launch. He contributed to the Ameen app, which reached 2M+ users and topped the App Store. He also built 100+ stores on Salla before joining.",
    },
  },
  {
    q: { ar: "وش الخبرات السابقة لمحمد البدر؟", en: "What is his earlier experience?" },
    a: {
      ar: "اشتغل مدير منتج بدوام جزئي في تطبيق آمين، ومدير نمو المنتج في وكالة دولاب، ومدير منتج لمسار تعلّم بالذكاء الاصطناعي في منصة Algooru. وقبلها بنى مواقع ومتاجر للتجار كمقدّم خدمات على سلة.",
      en: "He worked as a part-time Product Manager at the Ameen app, Product Growth Manager at Doolab Agency, and Product Manager for an AI-powered learning path at Algooru. Before that he built stores and sites for merchants as a Salla service provider.",
    },
  },
  {
    q: { ar: "وش تخصص محمد البدر؟", en: "What is his specialty?" },
    a: {
      ar: "إدارة المنتج مع تركيز على النمو، وSaaS، والذكاء الاصطناعي. يركز على الاكتساب العضوي عبر السيو، والنمو بقيادة المنتج PLG، والنمو بالمحتوى، وبناء النماذج الأولية بسرعة.",
      en: "Product management with a focus on growth, SaaS and AI. He works on organic acquisition through SEO, product-led growth (PLG), content-led growth, and rapid prototyping.",
    },
  },
  {
    q: { ar: "وش المشاريع الشخصية اللي يشتغل عليها؟", en: "What personal projects is he building?" },
    a: {
      ar: "SalahBreak، تطبيق يحوّل الصلاة إلى «استراحة» داخل بيئة العمل. وتحدي الـ 50 أداة بـ Claude API، يستكشف فيه حدود الـ Vibe Coding. ويدير هذا الموقع كمركز لأعماله ومحتواه.",
      en: "SalahBreak, an app that reframes prayer as a workplace break. And the 50 Tools Challenge, building 50 product tools with the Claude API to explore the limits of Vibe Coding. He also runs this site as the hub for his work and content.",
    },
  },
  {
    q: { ar: "وين درس محمد البدر؟", en: "Where did he study?" },
    a: {
      ar: "حصل على بكالوريوس هندسة البرمجيات من جامعة حفر الباطن (2019 إلى 2024)، وأكمل شهادات في Product Analytics وProduct Launches من Product School، وProduct Marketing Foundations من LinkedIn Learning.",
      en: "He holds a BSc in Software Engineering from the University of Hafr AlBatin (2019 to 2024), and completed Product Analytics and Product Launches with Product School, and Product Marketing Foundations with LinkedIn Learning.",
    },
  },
  {
    q: { ar: "هل في أكثر من شخص باسم محمد البدر؟", en: "Are there other people named Mohammed AlBader?" },
    a: {
      ar: "نعم، الاسم شائع. هذا الموقع عن محمد البدر مدير المنتج في سلة ومؤسس AbdihQT. حساباته الرسمية: لينكدإن وإكس وإنستقرام باسم mo7albader، والموقع mo7albader.com.",
      en: "Yes, the name is common. This site is about Mohammed AlBader, the Product Manager at Salla and founder of AbdihQT. His official accounts are LinkedIn, X and Instagram under mo7albader, plus mo7albader.com.",
    },
  },
  {
    q: { ar: "كيف أتواصل مع محمد البدر؟", en: "How can I contact Mohammed AlBader?" },
    a: {
      ar: "عبر البريد hello@mo7albader.com، أو لينكدإن linkedin.com/in/mo7albader، أو إكس @mo7albader. متاح لعدد محدود من استشارات المنتج، خصوصًا في SaaS والتعليم الرقمي ومنتجات المحتوى.",
      en: "By email at hello@mo7albader.com, on LinkedIn at linkedin.com/in/mo7albader, or on X at @mo7albader. He is available for a limited number of product consultations, mainly in SaaS, EdTech and content products.",
    },
  },
];
