"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import CalModal from "@/components/CalModal";
import { trackClick } from "@/lib/track";

const AMAZON_TAG = "z7dart-21";
function amazonSearch(query: string) {
  return `https://www.amazon.sa/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
// exact product page (real ASIN), used once we know precisely which item it is
function amazonProduct(asin: string) {
  return `https://www.amazon.sa/dp/${asin}?tag=${AMAZON_TAG}`;
}

// +1% for every 2 full months elapsed since baselineDate, capped at 100% — same logic as the homepage goal card
function computeProgress(baselineDate: string, baselineProgress: number) {
  const [y, m] = baselineDate.split("-").map(Number);
  const now = new Date();
  const monthsElapsed = (now.getFullYear() - y) * 12 + (now.getMonth() - (m - 1));
  const grown = baselineProgress + Math.max(0, Math.floor(monthsElapsed / 2));
  return Math.min(100, grown);
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mo7albader" },
  { label: "X", href: "https://x.com/mo7albader" },
  { label: "Instagram", href: "https://instagram.com/mo7albader" },
  { label: "Snapchat", href: "https://snapchat.com/add/mo7albader" },
];

type ProductItem = {
  name: string;
  key: string;
  query?: string;
  asin?: string;
  image?: string;
  comingSoon?: boolean;
};

// products list needs your confirmation on "لوجتك xs master 4" — displayed as Logitech MX Master 3S below
// links + photos below are the exact listings you sent (real ASIN + official product photo)
const PRODUCTIVITY_PRODUCTS: ProductItem[] = [
  { name: "ماوس Logitech MX Master 3S", key: "mouse_logitech", asin: "B07W5JKHFZ", image: "/bio/products/mx_master.jpg" },
  { name: "شاشة ايسوس TUF Gaming VG27AQ5A-J", key: "monitor", asin: "B0GF8176TN", image: "/bio/products/monitor.jpg" },
  { name: "ماوس باد", key: "mousepad", query: "gaming mouse pad" },
  { name: "آيفون 17 برو ماكس", key: "iphone_17_pro_max", asin: "B0FQFHZF6L", image: "/bio/products/iphone17.jpg" },
  { name: "سماعة Anker Soundcore Q45", key: "soundcore_q45", asin: "B0B5VHRX7F", image: "/bio/products/soundcore.jpg" },
  { name: "ساعة Apple Watch Ultra", key: "watch_ultra", query: "Apple Watch Ultra", image: "/bio/products/watch_ultra.jpg" },
  { name: "Whoop", key: "whoop", asin: "B0DY2SWV16", image: "/bio/products/whoop.jpg" },
  { name: "نوت بوك قوي للمهام", key: "laptop", query: "powerful laptop" },
  { name: "حقيبة لابتوب", key: "laptop_bag", asin: "B0BWR4T89S", image: "/bio/products/laptop_bag.jpg" },
];

// suggested — swap anytime, these are placeholders since you asked me to pick
const ENTERTAINMENT_PRODUCTS: ProductItem[] = [
  { name: "Kindle", key: "kindle_paperwhite", asin: "B0CP31L73X", image: "/bio/products/kindle.jpg" },
  { name: "Nintendo Switch 2", key: "switch_oled", asin: "B0GZH8NWND", image: "/bio/products/switch_oled.jpg" },
  { name: "Apple TV 4K", key: "apple_tv_4k", asin: "B0BJMNZTCK", image: "/bio/products/appletv.jpg" },
  { name: "PlayStation 5", key: "ps5", asin: "B0CN5Q73LC", image: "/bio/products/ps5.jpg" },
];

// only "فن الحرب" was specified — the rest are placeholders (including the 2 latest), swap anytime. Covers are real (Open Library)
const BOOKS = [
  { title: "فن الحرب", author: "سون تزو", key: "art_of_war", query: "فن الحرب سون تزو", image: "/bio/books/art_of_war.jpg" },
  { title: "العادات السبع للناس الأكثر فعالية", author: "ستيفن كوفي", key: "7_habits", query: "العادات السبع للناس الأكثر فعالية", image: "/bio/books/7_habits.jpg" },
  { title: "فكر تصبح غنيًا", author: "نابليون هيل", key: "think_grow_rich", query: "فكر تصبح غنيا نابليون هيل", image: "/bio/books/think_grow_rich.jpg" },
  { title: "الأمير", author: "ميكافيلي", key: "the_prince", query: "الأمير ميكافيلي", image: "/bio/books/the_prince.jpg" },
  { title: "ابدأ بالسبب", author: "سايمون سينك", key: "start_with_why", query: "ابدأ بالسبب سايمون سينك", image: "/bio/books/start_with_why.jpg" },
  { title: "العادات الذرية", author: "جيمس كلير", key: "atomic_habits", query: "العادات الذرية جيمس كلير", image: "/bio/books/atomic_habits.jpg" },
  { title: "الأب الغني والأب الفقير", author: "روبرت كيوساكي", key: "rich_dad_poor_dad", query: "الأب الغني والأب الفقير", image: "/bio/books/rich_dad_poor_dad.jpg" },
];

// Range Rover goal — same numbers as the homepage's Goal2028 card
const GOAL = {
  baselineDate: "2026-07",
  baselineProgress: 13,
};

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
        <path d="M18.9 2H22l-7.64 8.73L23 22h-6.8l-5.02-6.56L5.4 22H2.3l8.17-9.34L1.5 2h6.97l4.54 6 5.89-6Zm-1.19 18h1.71L7.39 3.9H5.55L17.71 20Z" />
      </svg>
    );
  }
  if (label === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  // Snapchat
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden>
      <path d="M12 2c-2.9 0-5.2 2.5-5.2 5.6 0 .8.05 1.6.14 2.3-.5.3-1.1.5-1.7.5a.6.6 0 0 0-.5.9c.4.9 1.4 1.5 2.2 1.9-.1.3-.3.6-.6.8-.5.4-1.2.6-1.9.7a.5.5 0 0 0-.1 1c.5.2 1.3.5 2.1.6.1.3.2.7.4 1 .6 1 2.4 1.7 5.1 1.7s4.5-.7 5.1-1.7c.2-.3.3-.7.4-1 .8-.1 1.6-.4 2.1-.6a.5.5 0 0 0-.1-1c-.7-.1-1.4-.3-1.9-.7-.3-.2-.5-.5-.6-.8.8-.4 1.8-1 2.2-1.9a.6.6 0 0 0-.5-.9c-.6 0-1.2-.2-1.7-.5.09-.7.14-1.5.14-2.3C17.2 4.5 14.9 2 12 2Z" />
    </svg>
  );
}

function ChevronIcon({ active }: { active: boolean }) {
  return (
    <span
      className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-white/80 transition-transform duration-300"
      style={{ transform: active ? "rotate(180deg)" : "none" }}
    >
      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
        {active ? <path d="M3 8h10" strokeLinecap="round" /> : <path d="M8 3v10M3 8h10" strokeLinecap="round" />}
      </svg>
    </span>
  );
}

function ExternalArrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="shrink-0 text-white/40"
    >
      <path d="M4 12 12 4M6 4h6v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// generic mat/pad icon — shown when a product has no photo yet
function MousepadIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="12" rx="3" />
      <path d="M7 10h10M7 14h6" />
    </svg>
  );
}

function Thumb({ image, fallback }: { image?: string; fallback?: React.ReactNode }) {
  return (
    <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg border border-line bg-white/[0.03]">
      {image ? (
        <Image src={image} alt="" fill sizes="44px" className="object-cover" />
      ) : (
        <span className="text-white/50">{fallback}</span>
      )}
    </span>
  );
}

function ProductRow({
  name,
  eventKey,
  query,
  asin,
  comingSoon,
  image,
}: {
  name: string;
  eventKey: string;
  query?: string;
  asin?: string;
  comingSoon?: boolean;
  image?: string;
}) {
  if (comingSoon) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-3 opacity-60">
        <Thumb fallback={<MousepadIcon />} />
        <span className="flex-1 text-sm">{name}</span>
        <span className="pill !py-1 !text-xs">قريبًا</span>
      </div>
    );
  }
  return (
    <a
      href={asin ? amazonProduct(asin) : amazonSearch(query!)}
      target="_blank"
      rel="noopener sponsored"
      onClick={() => trackClick("bio_product_click", { label: eventKey })}
      className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-3 transition-colors hover:border-accent"
    >
      <Thumb image={image} fallback={<MousepadIcon />} />
      <span className="flex-1 text-sm">{name}</span>
      <ExternalArrow />
    </a>
  );
}

export default function BioContent() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [booksOpen, setBooksOpen] = useState(false);
  const [calOpen, setCalOpen] = useState(false);
  const pct = computeProgress(GOAL.baselineDate, GOAL.baselineProgress);

  return (
    <main className="min-h-screen py-14">
      <div className="mx-auto w-full max-w-[440px] px-5">
        {/* avatar + name */}
        <Reveal y={20}>
          <div className="flex flex-col items-center text-center">
            <div
              className="relative h-28 w-28 overflow-hidden rounded-full border border-line"
              style={{ boxShadow: "var(--glass)" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(120% 95% at 50% 12%, #ff7a3d 0%, var(--accent) 30%, #7d1f06 66%, #160a05 100%)",
                }}
              />
              <Image
                src="/mohammed.png"
                alt="محمد البدر"
                fill
                priority
                sizes="112px"
                className="object-cover"
                style={{ objectPosition: "center top" }}
              />
            </div>
            <h1 className="font-display mt-4 text-xl font-bold">محمد البدر</h1>
            <p className="mt-1 text-sm text-muted">مدير منتج · باني منتجات يستخدمها ملايين الناس</p>

            {/* socials */}
            <div className="mt-5 flex items-center justify-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={s.label}
                  onClick={() => trackClick("bio_social_click", { label: s.label.toLowerCase() })}
                  className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/[0.03]
                             text-white/80 transition-colors hover:border-accent hover:text-white"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* link cards */}
        <div className="mt-8 flex flex-col gap-3">
          {/* منتجاتي */}
          <Reveal delay={0.05} y={16}>
            <div className="card overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  const next = !productsOpen;
                  setProductsOpen(next);
                  if (next) trackClick("bio_products_expand");
                }}
                aria-expanded={productsOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-start"
              >
                <span className="font-display text-base font-bold">منتجاتي</span>
                <ChevronIcon active={productsOpen} />
              </button>
              <AnimatePresence initial={false}>
                {productsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.44, 0, 0.56, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-5 px-5 pb-5">
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-wide text-faint">الإنتاجية</p>
                        <div className="flex flex-col gap-2">
                          {PRODUCTIVITY_PRODUCTS.map((p) => (
                            <ProductRow key={p.key} name={p.name} eventKey={p.key} query={p.query} asin={p.asin} comingSoon={p.comingSoon} image={p.image} />
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="mb-2 text-xs uppercase tracking-wide text-faint">الترفيهية</p>
                        <div className="flex flex-col gap-2">
                          {ENTERTAINMENT_PRODUCTS.map((p) => (
                            <ProductRow key={p.key} name={p.name} eventKey={p.key} query={p.query} asin={p.asin} image={p.image} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* موقعي الشخصي — compact row, thumbnail cropped from the real OG image */}
          <Reveal delay={0.1} y={16}>
            <a
              href="https://mo7albader.com"
              onClick={() => trackClick("bio_website_click")}
              className="card flex items-center gap-3 p-3 transition-colors hover:border-accent"
            >
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-line">
                <Image
                  src="/opengraph-image.png"
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                  style={{ objectPosition: "85% center" }}
                />
              </span>
              <span className="flex-1 font-display text-base font-bold">موقعي الشخصي</span>
              <ExternalArrow />
            </a>
          </Reveal>

          {/* مكتبتي للقراءة */}
          <Reveal delay={0.15} y={16}>
            <div className="card overflow-hidden">
              <button
                type="button"
                onClick={() => {
                  const next = !booksOpen;
                  setBooksOpen(next);
                  if (next) trackClick("bio_books_expand");
                }}
                aria-expanded={booksOpen}
                className="flex w-full items-center justify-between gap-4 p-5 text-start"
              >
                <span className="font-display text-base font-bold">مكتبتي للقراءة</span>
                <ChevronIcon active={booksOpen} />
              </button>
              <AnimatePresence initial={false}>
                {booksOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.44, 0, 0.56, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 px-5 pb-5">
                      {BOOKS.map((b) => (
                        <a
                          key={b.key}
                          href={amazonSearch(b.query)}
                          target="_blank"
                          rel="noopener sponsored"
                          onClick={() => trackClick("bio_book_click", { label: b.key })}
                          className="flex items-center gap-3 rounded-xl border border-line bg-white/[0.02] px-3 py-3 transition-colors hover:border-accent"
                        >
                          <span className="relative h-14 w-11 shrink-0 overflow-hidden rounded-md border border-line">
                            <Image src={b.image} alt="" fill sizes="44px" className="object-cover" />
                          </span>
                          <span className="flex-1 text-sm">
                            {b.title} <span className="text-muted">— {b.author}</span>
                          </span>
                          <ExternalArrow />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          {/* هدف رينج روفر — نسخة مصغّرة (كرت سطر بدل بانر كبير) */}
          <Reveal delay={0.18} y={16}>
            <div className="card flex flex-col gap-2 p-3">
              <div className="flex items-center gap-3">
                <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-lg border border-line">
                  <Image src="/rangerover.jpg" alt="" fill sizes="44px" className="object-cover" />
                </span>
                <span className="flex-1">
                  <span className="font-display block text-base font-bold">رينج روفر</span>
                  <span className="text-xs text-muted">الهدف الشخصي · 2028</span>
                </span>
                <span className="font-display text-sm font-bold tabular-nums" style={{ color: "var(--accent)" }}>
                  {pct}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full border border-line bg-black/40">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${pct}%`,
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  }}
                />
              </div>
            </div>
          </Reveal>

          {/* احجز مكالمة */}
          <Reveal delay={0.22} y={16}>
            <button
              type="button"
              onClick={() => {
                setCalOpen(true);
                trackClick("bio_cal_open");
              }}
              className="mt-2 flex w-full flex-col items-center gap-1 rounded-full bg-accent px-6 py-3.5 text-center font-medium text-white transition-colors hover:bg-accent2"
            >
              <span>احجز مكالمة معي</span>
              <span className="text-xs font-normal text-white/70">(فقط للعمل الرسمي)</span>
            </button>
          </Reveal>
        </div>

        <p className="mt-10 text-center text-xs text-faint">صمّمه وبناه محمد البدر</p>
      </div>

      <CalModal open={calOpen} onClose={() => setCalOpen(false)} />
    </main>
  );
}
