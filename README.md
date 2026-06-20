# Mohammed AlBader — Personal Site

موقع شخصي بسيط (Next.js 14 · TypeScript · Tailwind · Framer Motion) — ثنائي اللغة (عربي/إنجليزي مع دعم RTL).

## التشغيل محلياً

```bash
npm install
npm run dev
# افتح http://localhost:3000
```

## البناء والنشر

```bash
npm run build
npm start
```

للنشر على **Vercel**: ارفع المجلد على GitHub، ثم اربطه بـ Vercel — auto-deploy جاهز.

## الهيكل

```
app/
  layout.tsx      الخطوط + providers + RTL
  page.tsx        تجميع السكاشن
  globals.css     الـ design tokens (الألوان والمسافات)
components/        السكاشن + التنقّل
lib/data.ts       ← كل المحتوى ثنائي اللغة (مصدر واحد)
```

## تعديل المحتوى

كل النصوص في `lib/data.ts` فقط. كل عنصر فيه `{ ar, en }` — عدّل هنا وينعكس في كل مكان.

## الهوية (tokens)

موجودة في `app/globals.css`:
- الخلفية `#000000` (أسود تام) · الـ accent برتقالي `#F3500F` · أخضر «متاح» `#1EF482`
- dark-only — خلفية سوداء + برتقالي واحد كـ accent.
- لتغيير اللون: بدّل `--accent` و `--accent-2` فقط.
- الخطوط: عناوين Rajdhani · نص إنجليزي Poppins · نص عربي IBM Plex Sans Arabic.

## السكاشن

1. **Hero** — الاسم + التاقلاين + زر تواصل
2. **Stats** — أرقام الأثر مع عدّاد متحرك (CountUp)
3. **About** — نبذة تعريفية + tags
4. **Now** — وش تشتغل عليه حالياً
5. **Projects** — أبرز المشاريع (كروت مع روابط)
6. **Journey** — تايملاين 2018 → 2030
7. **Expertise** — مجالات الخبرة
8. **Goal 2028** — بلوك الرنج روفر (signature) مع progress مربوط بالترقيات
9. **Contact** — روابط + فوتر

> ملاحظة: حدّث روابط LinkedIn/Email/X في `lib/data.ts` ← `contact.links`.
