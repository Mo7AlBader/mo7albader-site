import type { Lang } from "@/lib/data";
import type { Bi } from "@/lib/i18n";

/* ============================================================================
   Prompt library
   ---------------------------------------------------------------------------
   The prompt BODY is always English. Models follow English instructions more
   reliably, and keeping one canonical version means there is never a second
   copy to drift out of sync. Everything wrapped around the prompt — title,
   summary, how-to-use, field labels — is bilingual and follows the site
   language toggle.

   Variables are written as {{TOKEN}} inside the body. The prompt page turns
   each one into an input, so a visitor fills the blanks and copies a finished
   prompt instead of hunting for brackets.

   The prompts below are PLACEHOLDERS marked with `placeholder: true`, and the
   seven domains are a stand-in for the real ones. Swap both for the real
   library and drop the flag.
   ========================================================================== */

export type DomainId =
  | "planning"
  | "deep-work"
  | "review"
  | "product"
  | "content"
  | "learning"
  | "balance";

export type PromptVar = {
  /** the {{TOKEN}} this fills, without the braces */
  token: string;
  label: Bi;
  /** example value, English to match the prompt body */
  placeholder: string;
};

export type Prompt = {
  slug: string;
  domain: DomainId;
  title: Bi;
  summary: Bi;
  /** always English — see the note at the top of this file */
  body: string;
  vars?: PromptVar[];
  howTo?: Bi[];
  updated: string;
  featured?: boolean;
  placeholder?: boolean;
};

/* ===== Domains =========================================================== */

export const domains: { id: DomainId; label: Bi }[] = [
  { id: "planning", label: { ar: "التخطيط والصباح", en: "Planning & Morning" } },
  { id: "deep-work", label: { ar: "العمل العميق", en: "Deep Work" } },
  { id: "review", label: { ar: "المراجعة", en: "Review" } },
  { id: "product", label: { ar: "إدارة المنتج", en: "Product" } },
  { id: "content", label: { ar: "المحتوى", en: "Content" } },
  { id: "learning", label: { ar: "التعلّم", en: "Learning" } },
  { id: "balance", label: { ar: "الصحة والتوازن", en: "Health & Balance" } },
];

export function domainLabel(id: DomainId, lang: Lang): string {
  return domains.find((d) => d.id === id)?.label[lang] ?? id;
}

/* ===== UI strings ======================================================== */

export const promptsUI = {
  section: { ar: "مكتبة البرومبتات", en: "Prompt library" },
  title: {
    ar: "برومبتات أستخدمها كل أسبوع",
    en: "Prompts I actually run every week",
  },
  lead: {
    ar: "برومبتات جاهزة للتخطيط والعمل العميق والمراجعة وإدارة المنتج. عبّي الفراغات وانسخها، أو افتحها مباشرة في نموذجك.",
    en: "Ready prompts for planning, deep work, review and product work. Fill the blanks and copy, or open one straight in your model.",
  },
  all: { ar: "الكل", en: "All" },
  searchPlaceholder: { ar: "ابحث في البرومبتات…", en: "Search prompts…" },
  empty: {
    ar: "ما فيه برومبت يطابق بحثك. جرّب كلمة ثانية أو شيل الفلتر.",
    en: "No prompt matches your search. Try another term or clear the filter.",
  },
  clear: { ar: "شيل الفلتر", en: "Clear filters" },
  openPrompt: { ar: "افتح البرومبت", en: "Open prompt" },
  fillIn: { ar: "عبّي الفراغات", en: "Fill in the blanks" },
  fillInNote: {
    ar: "اكتب قيمك هنا وتنعكس على البرومبت تحت مباشرة. أي حقل تتركه فاضي يبقى كما هو بين قوسين.",
    en: "Type your values here and they land in the prompt below. Any field you leave empty stays as its bracketed token.",
  },
  thePrompt: { ar: "البرومبت", en: "The prompt" },
  englishNote: {
    ar: "البرومبت بالإنجليزي عن قصد — النماذج تلتزم بالتعليمات الإنجليزية أدق.",
    en: "The prompt is in English on purpose: models follow English instructions more reliably.",
  },
  copyPrompt: { ar: "انسخ البرومبت", en: "Copy prompt" },
  runIt: { ar: "شغّله مباشرة", en: "Run it now" },
  howToUse: { ar: "كيف تستخدمه", en: "How to use it" },
  updated: { ar: "آخر تحديث", en: "Updated" },
  related: { ar: "برومبتات قريبة", en: "Related prompts" },
  fieldCount: { ar: "حقول", en: "fields" },
  placeholderNote: {
    ar: "هذا برومبت تجريبي موضوع لعرض التصميم، وسيُستبدل بالمكتبة الحقيقية.",
    en: "This is a placeholder prompt used to demo the layout. The real library will replace it.",
  },
  ctaTitle: { ar: "تبي نبني شي يصنع أثر؟", en: "Want to build something with impact?" },
  ctaLead: {
    ar: "أساعد فرق المنتج على النمو عبر المنتج والمحتوى والبيانات. خلنا نتكلم.",
    en: "I help product teams grow through product, content and data. Let's talk.",
  },
  ctaButton: { ar: "تواصل معي", en: "Get in touch" },
} as const;

/* ===== Prompts =========================================================== */

const HOW_TO_GENERIC: Bi[] = [
  {
    ar: "عبّي الحقول فوق، وتأكد من القيم قبل النسخ.",
    en: "Fill the fields above and sanity-check the values before you copy.",
  },
  {
    ar: "الصقه في بداية محادثة جديدة، لا في نص محادثة قديمة.",
    en: "Paste it at the start of a fresh conversation, not mid-thread.",
  },
  {
    ar: "لو الناتج عام زيادة، ضيّق النطاق بدل ما تعيد صياغة البرومبت كامل.",
    en: "If the output feels generic, narrow the scope rather than rewriting the whole prompt.",
  },
];

export const prompts: Prompt[] = [
  {
    slug: "morning-briefing",
    domain: "planning",
    updated: "2026-08-15",
    featured: true,
    placeholder: true,
    title: { ar: "البريف الصباحي", en: "Morning briefing" },
    summary: {
      ar: "يحوّل قائمة مهام مبعثرة إلى ثلاث أولويات وخطة نصف يوم.",
      en: "Turns a scattered task list into three priorities and a half-day plan.",
    },
    body: `You are my morning planning partner. Today is {{DATE}}.

Here is everything currently on my plate:
{{TASKS}}

Do the following, in order:
1. Group the items by the outcome they serve, not by the tool or team they came from.
2. Pick the three that most move {{GOAL}} forward. Say plainly why each one earned its place.
3. Name what I should explicitly not do today, and what it costs me to skip it.
4. Lay out the first four hours as blocks, with the hardest thinking first.

Keep it under 200 words. No pep talk, no restating my list back to me.`,
    vars: [
      { token: "DATE", label: { ar: "التاريخ", en: "Date" }, placeholder: "Sunday, 23 August" },
      { token: "TASKS", label: { ar: "مهامك اليوم", en: "Today's tasks" }, placeholder: "- ship the pricing page\n- review 2 PRDs\n- 1:1 with design" },
      { token: "GOAL", label: { ar: "هدف الربع", en: "Quarter goal" }, placeholder: "organic signups from product pages" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "deep-work-kickoff",
    domain: "deep-work",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "بداية جلسة عمل عميق", en: "Deep work kickoff" },
    summary: {
      ar: "يحدد مخرج الجلسة وأول خطوة قبل ما تبدأ، عشان ما تضيع أول عشرين دقيقة.",
      en: "Defines the session's output and first move before you start, so the first twenty minutes are not lost.",
    },
    body: `I am about to start a {{DURATION}} focused session on: {{TASK}}

Before I begin, help me set it up:
1. State the single artefact that must exist when the session ends. Be concrete: a file, a decision, a draft, a number.
2. Name the first physical action I take in the first two minutes.
3. List what I will be tempted to do instead, and the rule that blocks each one.
4. Give me the checkpoint question I ask myself at the halfway mark.

Answer in four short lines. Do not motivate me.`,
    vars: [
      { token: "DURATION", label: { ar: "مدة الجلسة", en: "Session length" }, placeholder: "90-minute" },
      { token: "TASK", label: { ar: "المهمة", en: "The task" }, placeholder: "the acquisition page brief for the fashion vertical" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "weekly-review",
    domain: "review",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "المراجعة الأسبوعية", en: "Weekly review" },
    summary: {
      ar: "يقارن ما خططت له بما صار فعلاً، ويطلع بقرار واحد للأسبوع الجاي.",
      en: "Compares what you planned against what happened, and lands on one decision for next week.",
    },
    body: `Run my weekly review. Be direct, not encouraging.

What I planned this week:
{{PLANNED}}

What actually happened:
{{ACTUAL}}

Produce:
1. The gap between the two, stated as a pattern rather than a list of misses.
2. The one cause that explains most of the gap. Pick one, do not give me three.
3. What I should stop doing next week, and what that frees up.
4. A single decision for next week, written so I can tell on Friday whether I kept it.

Under 250 words. If the week went well, say so in one line and move on.`,
    vars: [
      { token: "PLANNED", label: { ar: "اللي خططت له", en: "What you planned" }, placeholder: "3 product pages, 2 LinkedIn posts, PRD review" },
      { token: "ACTUAL", label: { ar: "اللي صار", en: "What happened" }, placeholder: "1 page shipped, 3 posts, no PRD review" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "problem-statement-stress-test",
    domain: "product",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "اختبار بيان المشكلة", en: "Problem statement stress test" },
    summary: {
      ar: "يهاجم بيان المشكلة قبل ما يهاجمه فريقك في الاجتماع.",
      en: "Attacks your problem statement before your team does it in the meeting.",
    },
    body: `Here is my problem statement:
{{STATEMENT}}

The evidence I have:
{{EVIDENCE}}

Act as the most sceptical person in the room. In order:
1. Point out where the statement smuggles in a solution instead of describing a problem.
2. Name the assumption that, if wrong, makes the whole thing collapse.
3. Tell me which piece of evidence is weakest and what would actually settle it.
4. Rewrite the statement in one sentence, in the user's words rather than the company's.

Do not soften anything. If the statement holds up, say which part is strong and why.`,
    vars: [
      { token: "STATEMENT", label: { ar: "بيان المشكلة", en: "Problem statement" }, placeholder: "Merchants abandon setup because onboarding is too long" },
      { token: "EVIDENCE", label: { ar: "الأدلة", en: "Your evidence" }, placeholder: "42% drop-off at step 3, 8 support tickets this month" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "linkedin-post-from-a-week",
    domain: "content",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "منشور من أسبوع شغل", en: "A post out of one week's work" },
    summary: {
      ar: "يحوّل شي تعلمته فعلاً إلى منشور، بدون نصائح عامة.",
      en: "Turns something you actually learned into a post, with no generic advice.",
    },
    body: `Here is something that happened at work this week:
{{STORY}}

Turn it into a LinkedIn post for an audience of {{AUDIENCE}}.

Rules:
- Open with the specific moment, not a general claim about the industry.
- Include the number, constraint or detail that makes it real.
- The lesson comes last and arrives in one line.
- No hooks that promise a thread. No "here's what I learned" framing. No emoji bullets.
- 120 to 180 words.

Give me two versions with different openings so I can pick.`,
    vars: [
      { token: "STORY", label: { ar: "القصة", en: "The story" }, placeholder: "A page we rewrote 3 times finally converted after we cut half the copy" },
      { token: "AUDIENCE", label: { ar: "الجمهور", en: "Audience" }, placeholder: "product managers in Saudi SaaS" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "learn-by-teaching",
    domain: "learning",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "تعلّم بالشرح", en: "Learn by explaining" },
    summary: {
      ar: "يكشف الفجوات في فهمك بأن يخليك تشرح، ثم يهاجم الشرح.",
      en: "Exposes the holes in your understanding by making you explain, then attacking the explanation.",
    },
    body: `I am learning {{TOPIC}}. Here is my current understanding, in my own words:
{{EXPLANATION}}

Do this:
1. Mark every place where I used a term correctly but clearly do not understand it.
2. Ask me the one question that my explanation cannot answer.
3. Give the corrected version of the part I got most wrong, in plain language and under 80 words.
4. Name the next concept that only makes sense once this one clicks.

Do not praise the explanation. Do not restate it back to me.`,
    vars: [
      { token: "TOPIC", label: { ar: "الموضوع", en: "Topic" }, placeholder: "retrieval-augmented generation" },
      { token: "EXPLANATION", label: { ar: "شرحك", en: "Your explanation" }, placeholder: "It fetches documents and passes them to the model as context..." },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "energy-audit",
    domain: "balance",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "جرد الطاقة", en: "Energy audit" },
    summary: {
      ar: "يوصل بين وقتك وطاقتك، ويطلع بتغيير واحد قابل للتنفيذ.",
      en: "Connects where your time went to where your energy went, and lands on one change you can make.",
    },
    body: `Here is how my week went.

Where the hours went:
{{TIME}}

Where the energy went (what drained me, what gave it back):
{{ENERGY}}

Analyse it:
1. Find the activity with the worst ratio of hours spent to energy returned.
2. Find the one I under-invest in relative to what it gives back.
3. Tell me the smallest change that shifts both, one I could start on Monday.
4. Say plainly what I am protecting by not making that change already.

Under 200 words. No wellness language.`,
    vars: [
      { token: "TIME", label: { ar: "توزيع الوقت", en: "Where hours went" }, placeholder: "22h meetings, 9h focused work, 6h reviews" },
      { token: "ENERGY", label: { ar: "الطاقة", en: "Energy" }, placeholder: "Drained: back-to-back reviews. Gave back: shipping the page Thursday" },
    ],
    howTo: HOW_TO_GENERIC,
  },
  {
    slug: "page-brief-for-design",
    domain: "product",
    updated: "2026-08-15",
    placeholder: true,
    title: { ar: "بريف صفحة لفريق التصميم", en: "Page brief for the design team" },
    summary: {
      ar: "يحوّل هدف الصفحة إلى ملف عناصر جاهز للتسليم.",
      en: "Turns a page goal into an element-by-element handoff document.",
    },
    body: `I need a brief for a {{PAGE_TYPE}} page aimed at {{SEGMENT}}.

The one thing this page must achieve: {{GOAL}}

Produce a handoff document with:
1. The page's single message, in one sentence a designer can hold in their head.
2. Section-by-section breakdown: what each section proves, and what the reader believes after it that they did not believe before.
3. For each section, the copy slots needed (headline, body, proof, CTA) with character guidance.
4. The proof elements required, and where each one comes from.
5. The one section to cut first if the page runs long.

Write it so a designer can start without asking me a question.`,
    vars: [
      { token: "PAGE_TYPE", label: { ar: "نوع الصفحة", en: "Page type" }, placeholder: "solution" },
      { token: "SEGMENT", label: { ar: "الشريحة", en: "Segment" }, placeholder: "mid-size fashion merchants" },
      { token: "GOAL", label: { ar: "هدف الصفحة", en: "Page goal" }, placeholder: "free trial signups without a sales call" },
    ],
    howTo: HOW_TO_GENERIC,
  },
];

/* ===== Variable filling =================================================== */

const TOKEN_RE = /\{\{([A-Z0-9_]+)\}\}/g;

/** Swaps {{TOKEN}} for the visitor's value; untouched fields keep their token. */
export function fillPrompt(body: string, values: Record<string, string>): string {
  return body.replace(TOKEN_RE, (match, token: string) => {
    const value = values[token]?.trim();
    return value ? value : match;
  });
}

/** Splits a body into text and token segments so the preview can highlight them. */
export function segmentPrompt(body: string): { text: string; token?: string }[] {
  const out: { text: string; token?: string }[] = [];
  let last = 0;
  for (const m of body.matchAll(TOKEN_RE)) {
    const at = m.index ?? 0;
    if (at > last) out.push({ text: body.slice(last, at) });
    out.push({ text: m[0], token: m[1] });
    last = at + m[0].length;
  }
  if (last < body.length) out.push({ text: body.slice(last) });
  return out;
}

/* ===== Selectors ========================================================= */

export const PROMPTS_PER_PAGE = 9;

export function sortedPrompts(): Prompt[] {
  return [...prompts].sort((a, b) => (a.updated < b.updated ? 1 : -1));
}

export function getPrompt(slug: string): Prompt | undefined {
  return prompts.find((p) => p.slug === slug);
}

export function featuredPrompt(): Prompt {
  return prompts.find((p) => p.featured) ?? sortedPrompts()[0];
}

export function relatedPrompts(prompt: Prompt, limit = 3): Prompt[] {
  const sameDomain = sortedPrompts().filter((p) => p.slug !== prompt.slug && p.domain === prompt.domain);
  const rest = sortedPrompts().filter((p) => p.slug !== prompt.slug && p.domain !== prompt.domain);
  return [...sameDomain, ...rest].slice(0, limit);
}

export const PROMPTS_URL = "https://mo7albader.com/prompts";

export function promptUrl(slug: string): string {
  return `${PROMPTS_URL}/${slug}`;
}
