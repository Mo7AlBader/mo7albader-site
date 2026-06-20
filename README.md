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
- الخلفية `#0A0A0F` · الـ accent إندِقو `#6366F1`
- لتغيير اللون: بدّل `--accent` و `--accent-2` فقط.

## السكاشن الخمس

1. **Hero** — الاسم + التاقلاين + زر تواصل
2. **Now** — وش تشتغل عليه حالياً
3. **Journey** — تايملاين 2018 → 2030
4. **Goal 2028** — بلوك الرنج روفر (signature) مع progress مربوط بالترقيات
5. **Contact** — روابط + فوتر

> ملاحظة: حدّث روابط LinkedIn/Email/X في `lib/data.ts` ← `contact.links`.
