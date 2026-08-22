"use client";

import Link from "next/link";
import Reveal from "@/components/Reveal";

type Block =
  | { t: "p"; text: string }
  | { t: "q"; text: string; src?: string }
  | { t: "ul"; items: (string | { text: string; tone: "bad" | "good" })[] }
  | { t: "h"; text: string };

type Post = {
  id: string;
  title: string;
  blocks: Block[];
};

// النصوص الأصلية لعَدي خضر — منقولة كما هي، بدون تصرّف في المعنى
const POSTS: Post[] = [
  {
    id: "01",
    title: "العمل في الإسلام",
    blocks: [
      {
        t: "p",
        text: "كان لي جلسة مع نفسي من فترة كنت بقرأ فيها عن العمل في الإسلام وكتبت ملخص لنفسي حول بعض النقاط، لكن قلت بعدين خليني أنشرها بين إخواني لعل وعسى ولو كلمة منها تفيد ولو شخص واحد.",
      },
      {
        t: "p",
        text: "فحتكون على شكل سلسلة من الرسائل الأسبوعية المختصرة تتناول جانب معين: معنى العمل وكيف يعرف الإسلام العمل، واجبات وحقوق العامل، واجبات وحقوق صاحب العمل وغيرها.",
      },
      {
        t: "p",
        text: "فقه العمل في الإسلام موضوع واسع ومهم، لأنه ينظم العلاقة بين الإنسان وعمله، وبين العامل وصاحب العمل، وبين المسؤول ومن هم تحت إدارته وفق مبادئ شرعية وأخلاقية.",
      },
      {
        t: "p",
        text: "فالإسلام لا ينظر للعمل فقط كمصدر رزق، بل **كعبادة إذا صلحت النية وأُدي بإتقان وأمانة**.",
      },
      {
        t: "q",
        src: "قرآن",
        text: "﴿وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ﴾",
      },
      {
        t: "q",
        src: "حديث",
        text: "«ما أكل أحد طعامًا قط خيرًا من أن يأكل من عمل يده».",
      },
      {
        t: "p",
        text: "فالإسلام ما يطلب منا فقط أن «نداوم»، بل أن نعمل بصدق وإتقان وعدل، فنكون نافعًا، صادقًا، ثابتًا، سهل التعامل.",
      },
      {
        t: "p",
        text: "ولو تنوي بعملك إطعام أهلك الحلال، ونفع الناس بمنتج جيد، يتحول دوامك إلى عبادة، نفس المهمة... لكن بأجر آخر عند الله إن شاء الله.",
      },
    ],
  },
  {
    id: "02",
    title: "كن نافعًا متقنًا",
    blocks: [
      {
        t: "p",
        text: "يُعرف المرء بأثره، فأثرك يبقى بعدك. خلي هدفك أن تترك كل مهمة أحسن مما وجدتها عليه، وكل زميل أكثر قدرة بمساعدتك.",
      },
      { t: "p", text: "**خير الناس أنفعهم للناس.**" },
      {
        t: "p",
        text: "الإتقان مو تاسك تغيرت حالته إلى Done. الإتقان مو «خلص الشغل»، بل تسليمه بجودة تليق باسمك.",
      },
      { t: "q", src: "حديث", text: "«إن الله يحب إذا عمل أحدكم عملًا أن يتقنه»." },
      {
        t: "p",
        text: "الفرق بين «خلصته بأي شكل» و«سلمته بجودة محترمة» هو الفرق بين موظف عادي وآخر يُعتمد عليه.",
      },
      {
        t: "p",
        text: "الإتقان يرفع قدرك حتى لو كنت هادي ما تتكلم كثير، فالله يرى عملك وسيجزيك خير جزاء.",
      },
      { t: "q", src: "قرآن", text: "﴿وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ﴾" },
    ],
  },
  {
    id: "03",
    title: "حسن التعامل مع الزملاء",
    blocks: [
      {
        t: "p",
        text: "أثرك في زملائك يبقى أطول من أي إنجاز. كلمة طيبة، عون في وقت ضيق، احترام عند الاختلاف... كلها صدقة في ميزانك.",
      },
      { t: "q", src: "قرآن", text: "﴿وَقُولُوا لِلنَّاسِ حُسْنًا﴾" },
      { t: "p", text: "لا تخلق دراما، ولا تنشر سلبية أو إشاعات تستهلك الفريق، ولا تنشر ثقافة اللوم." },
    ],
  },
  {
    id: "04",
    title: "أمانة ومسؤولية",
    blocks: [
      { t: "p", text: "الموظف العادي ينفذ مهمة، والقوي الأمين يفهم المطلوب ويتحمل مسؤوليته." },
      { t: "p", text: "تعامل مع عملك كأنه مشروعك أنت، مو تاسك تمرره لغيرك." },
      {
        t: "p",
        text: "عقلية «هاد مو شغلي» بتضرك مو بس تضر مكان عملك، لأنها بتخليك محدود، وعقلية «أنا مسؤول» بترفعك؛ لأن اللي يحمل المسؤولية بصدق يُحمَّل ما هو أكبر بثقة.",
      },
      { t: "q", src: "قرآن", text: "﴿إِنَّ خَيْرَ مَنِ اسْتَأْجَرْتَ الْقَوِيُّ الْأَمِينُ﴾" },
      {
        t: "p",
        text: "الأمانة في عملنا أوسع من المال: هي أمانة الوقت والجهد والمعلومة والالتزام بالمواعيد والوعود.",
      },
      {
        t: "p",
        text: "لا تدعي إنجازًا لم يتم، ولا تخفي مشكلة، ولا تنسب جهد غيرك لنفسك، وشارك أي معلومة عندك ممكن توفر جهد ووقت زميلك.",
      },
      {
        t: "p",
        text: "افهم لماذا تعمل، لا ماذا تعمل فقط. الموظف العادي ينفذ **Task**، الموظف القوي يفهم **Impact**.",
      },
      {
        t: "p",
        text: "أنت لا تعمل فقط لإدارة مهام، بل لإدارة أرزاق، معنويات، فرص، ومستقبل ناس. عملك يتأثر على زملائك والتجار وأصحاب العمل.",
      },
      { t: "p", text: "**راقب الله في عملك حين يغيب عنك كل نظام ومتابعة.**" },
    ],
  },
  {
    id: "05",
    title: "الصدق والمبادرة",
    blocks: [
      {
        t: "p",
        text: "إذا تأخرت قول تأخرت، وإذا ما بتعرف قول ما بعرف. كلمة صادقة اليوم تختصر عليك أزمات كثيرة غدًا.",
      },
      { t: "p", text: "الصدق في الأرقام والتقارير والمواعيد هو ما يجعل كلمتك لها وزن." },
      {
        t: "q",
        src: "قرآن",
        text: "﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَكُونُوا مَعَ الصَّادِقِينَ﴾",
      },
      { t: "q", src: "حديث", text: "«إن الصدق يهدي إلى البر، وإن البر يهدي إلى الجنة»." },
      { t: "q", src: "حديث", text: "«دع ما يريبك إلى ما لا يريبك؛ فإن الصدق طمأنينة»." },
      { t: "p", text: "من لا يعمل إلا حين يُسأل، يصعب الاعتماد عليه." },
      { t: "p", text: "أنجز قبل أن تُسأل عن التاسك، وبادر لحل المشكلة قبل ما تكبر." },
      {
        t: "p",
        text: "المبادرة ما تكلفك شيء، لكنها بتصنع لك سمعة جيدة. كون أنت من يرفع المخاطر مبكرًا ويقترح الحلول، لا من يكتفي بالشكوى والتذمر.",
      },
      { t: "p", text: "**الموظف الأمين تطمئن له القلوب قبل التقارير.**" },
    ],
  },
  {
    id: "06",
    title: "القائد راعٍ لا صاحب سلطة",
    blocks: [
      {
        t: "p",
        text: "اليوم كلامنا على القادة بشكل خاص. الإسلام ما بشوف المدير كصاحب سلطة، بل كمؤتمن ومسؤول عن اللي يشتغلوا معه، وراح يُسأل عنهم أمام الله قبل الناس.",
      },
      { t: "q", src: "حديث", text: "«كلكم راعٍ وكلكم مسؤول عن رعيته»." },
      {
        t: "p",
        text: "أنت ما بتدير مهام بس، أنت بتدير أرزاق ناس ومعنوياتهم وفرصهم ومستقبلهم. هي الكلمة لحالها تكفي تغير نظرتك لمنصبك ودورك كقائد ومدير.",
      },
      { t: "p", text: "**الرحمة والرفق ما تنقص من هيبتك شيء.**" },
      { t: "q", src: "حديث", text: "«اللهم من ولي من أمر أمتي شيئًا فرفق بهم فارفق به»." },
      {
        t: "q",
        src: "حديث",
        text: "«إن الرفق لا يكون في شيء إلا زانه، ولا يُنزع من شيء إلا شانه».",
      },
      {
        t: "p",
        text: "والرفق مو معناه التهاون، معناه تتعامل مع فريقك كبشر عندهم ظروف وطاقة، مو كأنهم آلات.",
      },
      {
        t: "p",
        text: "وخلي عندك ميزان وأسلوب، وازن بين النتائج والرحمة. بعض المدراء يظن أن الرحمة = ضعف، والحزم = قسوة.",
      },
      { t: "p", text: "والصحيح: **استخدام الحزم العادل + الرحمة الحكيمة.**" },
      { t: "h", text: "مع الموظف المقصّر" },
      {
        t: "ul",
        items: [
          { text: "تهاجمه قدام الناس، هذا كسر خاطر.", tone: "bad" },
          { text: "تسكت عن التقصير، هذا تفريط.", tone: "bad" },
          { text: "تحدد توقعات، تفهم السبب، تعطي Feedback واضح، تتابع، ثم تحاسب إذا استمر.", tone: "good" },
        ],
      },
    ],
  },
  {
    id: "07",
    title: "صفات وواجبات القائد",
    blocks: [
      {
        t: "p",
        text: "**الوضوح والشفافية** في قراراتك وتوقعاتك وتقييمك. لما فريقك يعرف شو بدك، وعلى أي أساس بيتم تقييمهم، وإلى أين تتجه السفينة، حيشتغل بثقة مو بقلق.",
      },
      { t: "p", text: "الغموض يولد قلق، والوضوح يولد التزام." },
      {
        t: "p",
        text: "**العدل.** لا محاباة ولا ظلم ولا تفرقة بين الموظفين بدون حق. خل ميزانك واحد للجميع.",
      },
      {
        t: "p",
        text: "ما تقرب أحد عشانه صاحبك أو يجاملَك، وما تبعد أحد عشان ما بدا هنك. بالعكس، شجع فريقك يختلف معك بدل ما يسلكلك.",
      },
      { t: "p", text: "وكون عادل بتوزيع المهام والتقدير والترقية وإنك تسمعهم." },
      { t: "q", src: "قرآن", text: "﴿إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ﴾" },
      { t: "p", text: "**طور فريقك وعلمهم وادعمهم.** المدير الصح يصنع قادة." },
      {
        t: "p",
        text: "واللي يحيط نفسه بناس أضعف منه مشان يحافظ على مكانته هذا ضعف. القوي هو اللي بيفتخر إن اللي رباهم تجاوزوه.",
      },
      {
        t: "p",
        text: "**كون قدوة.** أنت مرآة فريقك. الناس تقلد فعلك قبل كلامك، واللي ما تلتزم فيه أنت ما راح يلتزم فيه من فريقك ولا تقدر تفرضه.",
      },
      { t: "p", text: "**التعامل مع الفشل.** ميزة فشلت؟ إطلاق ما نجح؟ Metric نزل؟" },
      { t: "p", text: "القائد ما يبحث على من المذنب. القائد الناضج أول سؤال له: **«وين الخلل؟»**" },
      {
        t: "p",
        text: "المشكلة في فرضية غلط من الأساس؟ ولا تنفيذ ضعيف؟ ولا توقيت؟ ولا ضعف adoption؟ ولا قياس خاطئ؟",
      },
      { t: "p", text: "**ثقافة اللوم تقتل الإبداع.**" },
    ],
  },
  {
    id: "08",
    title: "القائد الصالح",
    blocks: [
      {
        t: "ul",
        items: [
          "**عادل**، يرتاح الناس معه وما يخافوا منه.",
          "**واضح ومنظم**، لا يترك فريقه في حيرة.",
          "**يسمع وينصح** قبل أن يحكم.",
          "**قوي عند الحاجة، حازم بلا قسوة.**",
          "**لا يبيع فريقه**، بل يقف معهم وقت الشدة.",
          "**يتحمل المسؤولية ويعترف بخطئه**، فلا يلقي تبعة الفشل على غيره.",
          "**يفرح بنجاح الآخرين** ولا تضيق نفسه بتفوقهم.",
          "**يكافئ المنجز**، فلا يستوي عنده المجتهد والمقصر.",
          "لا يسرق جهود الآخرين وينسبها لنفسه.",
        ],
      },
      {
        t: "p",
        text: "**القوة الحقيقية** مو إنك تسيطر على الناس، بل إنك تأثر فيهم بمسؤولية، تخليهم يشتغلوا معك عن قناعة ومحبة مو عن خوف.",
      },
      { t: "p", text: "هذا هو القائد اللي بتبقى آثاره في فريقه حتى لو رحل عنهم." },
      { t: "h", text: "الختام" },
      { t: "p", text: "الموظف مؤتمن، والقائد راعٍ، وكل مسؤول أمام الله." },
      { t: "p", text: "لو كلنا استحضرنا هالمسؤولية لصلح العمل وبورك فيه." },
      { t: "p", text: "بارك الله في جهدكم ووقتكم وعملكم." },
    ],
  },
];

// **نص** → <strong>
function withBold(text: string, keyPrefix: string) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={`${keyPrefix}-${i}`} className="font-semibold text-white">
        {part}
      </strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    )
  );
}

// ✕ للسلوك الخاطئ · ✓ للسلوك الصحيح — يحفظ معنى القائمة الأصلية
function ToneMark({ tone }: { tone: "bad" | "good" }) {
  const good = tone === "good";
  return (
    <span
      className="mt-2 grid h-5 w-5 shrink-0 place-items-center rounded-full border"
      style={{
        borderColor: good ? "rgba(30,244,130,0.35)" : "rgba(255,255,255,0.15)",
        color: good ? "var(--mint)" : "var(--faint)",
      }}
      aria-hidden
    >
      <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        {good ? <path d="M3.5 8.5 6.5 11.5 12.5 5" /> : <path d="M4.5 4.5 11.5 11.5M11.5 4.5 4.5 11.5" />}
      </svg>
    </span>
  );
}

function Quote({ text, src }: { text: string; src?: string }) {
  return (
    <figure
      className="my-6 rounded-2xl border border-line bg-white/[0.03] p-5 md:p-6"
      style={{ boxShadow: "var(--glass)" }}
    >
      {src && (
        <figcaption className="mb-3 inline-flex items-center gap-2 text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
          {src}
        </figcaption>
      )}
      <p className="text-[17px] leading-[2.1] text-white md:text-lg">{text}</p>
    </figure>
  );
}

export default function WorkOfIslamContent() {
  return (
    <main>
      <div className="frame">
        {/* ===== header ===== */}
        <section className="container py-14 md:py-16">
          <Reveal y={16}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4 rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              الرئيسية
            </Link>
          </Reveal>

          <Reveal delay={0.05} x={40} y={0}>
            <p className="eyebrow mt-8">سلسلة في العمل والقيادة</p>
            <h1 className="font-display mt-4 text-3xl font-bold tracking-tight md:text-5xl">
              العمل في الإسلام
            </h1>
          </Reveal>

          <div className="mt-6 max-w-2xl space-y-4">
            <Reveal delay={0.1} y={20}>
              <p className="text-base leading-relaxed text-white/80 md:text-[17px]">
                سلسلة كتبها <span className="text-white">عَدي خضر</span> وشاركها مع فريقه على مدار عدة أسابيع، عن معنى
                العمل في الإسلام وما يرتبط به من إتقان وأمانة وصدق وعدل ورفق ومسؤولية وقيادة.
              </p>
            </Reveal>
            <Reveal delay={0.16} y={20}>
              <p className="text-base leading-relaxed text-white/80 md:text-[17px]">
                جمعتها هنا في صفحة واحدة للفائدة، ولتكون تذكيرًا لي قبل غيري بهذه المعاني.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.22} y={16}>
            <div className="card mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 p-5 md:p-6">
              <div>
                <p className="text-xs uppercase tracking-wide text-faint">النصوص</p>
                <p className="font-display mt-1 font-bold">عَدي خضر · Ady Khedher</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-faint">الجمع وإعادة النشر</p>
                <p className="font-display mt-1 font-bold">محمد البدر</p>
              </div>
            </div>
          </Reveal>

          {/* فهرس */}
          <Reveal delay={0.28} y={16}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {POSTS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="rounded-full border border-line bg-white/[0.03] px-4 py-1.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
                >
                  <span className="text-faint">{p.id}</span> · {p.title}
                </a>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ===== posts ===== */}
        <section className="container py-12 md:py-14">
          <div className="flex flex-col gap-4">
            {POSTS.map((post, i) => (
              <Reveal key={post.id} delay={i === 0 ? 0 : 0.04} y={20}>
                <article id={post.id} className="card scroll-mt-8 p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-display grid h-9 min-w-9 place-items-center rounded-xl px-2 text-sm font-bold text-white"
                      style={{ background: "linear-gradient(135deg, #8a2d09 0%, var(--accent) 100%)" }}
                    >
                      {post.id}
                    </span>
                    <h2 className="font-display text-xl font-bold tracking-tight md:text-2xl">{post.title}</h2>
                  </div>

                  <div className="mt-5">
                    {post.blocks.map((b, j) => {
                      const key = `${post.id}-${j}`;
                      if (b.t === "q") return <Quote key={key} text={b.text} src={b.src} />;
                      if (b.t === "h")
                        return (
                          <h3 key={key} className="font-display mb-3 mt-8 border-t border-line pt-6 text-lg font-bold">
                            {b.text}
                          </h3>
                        );
                      if (b.t === "ul")
                        return (
                          <ul key={key} className="my-5 flex flex-col gap-3">
                            {b.items.map((item, k) => {
                              const tone = typeof item === "string" ? null : item.tone;
                              const text = typeof item === "string" ? item : item.text;
                              return (
                                <li key={`${key}-${k}`} className="flex gap-3 leading-[2] text-white/80">
                                  {tone ? (
                                    <ToneMark tone={tone} />
                                  ) : (
                                    <span
                                      className="mt-[14px] h-1.5 w-1.5 shrink-0 rounded-full"
                                      style={{ background: "var(--accent)" }}
                                    />
                                  )}
                                  <span>{withBold(text, `${key}-${k}`)}</span>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      return (
                        <p key={key} className="mb-4 text-base leading-[2] text-white/80 md:text-[17px]">
                          {withBold(b.text, key)}
                        </p>
                      );
                    })}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ===== credit footer ===== */}
        <section className="container py-14 text-center md:py-16">
          <Reveal y={16}>
            <p className="font-display text-2xl font-bold tracking-tight md:text-3xl">
              شكرًا لكل من قرأ وشارك وناقش
            </p>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
              النصوص الأصلية لعَدي خضر، جمعها وأعاد نشرها للفائدة محمد البدر.
            </p>
            <Link
              href="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-5 py-2.5 text-sm text-white/80 transition-colors hover:border-accent hover:text-white"
            >
              رجوع للموقع
            </Link>
            <p className="mt-10 text-sm text-faint">© {new Date().getFullYear()} · mo7albader.com</p>
          </Reveal>
        </section>
      </div>
    </main>
  );
}
