import type { Metadata } from "next";
import { Rajdhani, Poppins, IBM_Plex_Sans_Arabic, Waterfall } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { LangProvider } from "@/components/LangContext";

const display = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const arabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ar",
});

const GA_ID = "G-FVMYSHQ115";

// cursive signature mark used on the hero portrait (latin only)
const signature = Waterfall({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mo7albader.com"),
  // Arabic name first: the site is Arabic (lang="ar") and the target query is "محمد البدر"
  title: {
    default: "محمد البدر | Mohammed AlBader · مدير منتج",
    template: "%s · محمد البدر",
  },
  description:
    "محمد البدر، مدير منتج في سلة من الرياض. أبني وأنمّي منتجات SaaS عبر المنتج والمحتوى والبيانات والذكاء الاصطناعي. حساباتي: لينكدإن، إكس (تويتر)، إنستقرام. Mohammed AlBader, Product Manager.",
  applicationName: "محمد البدر",
  keywords: [
    "محمد البدر",
    "Mohammed AlBader",
    "mo7albader",
    "Product Manager",
    "SaaS Growth",
    "Product-led Growth",
    "Salla",
    "AbdihQT",
    "Riyadh",
    "AI Product Manager",
  ],
  authors: [{ name: "محمد البدر", url: "https://mo7albader.com" }],
  creator: "محمد البدر",
  publisher: "محمد البدر",
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/feed.xml" },
  },
  openGraph: {
    type: "website",
    siteName: "محمد البدر",
    title: "محمد البدر | Mohammed AlBader · مدير منتج",
    description:
      "محمد البدر، مدير منتج في سلة. أبني وأنمّي منتجات SaaS عبر المنتج والمحتوى والبيانات والذكاء الاصطناعي.",
    url: "/",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  twitter: {
    card: "summary_large_image",
    title: "محمد البدر | Mohammed AlBader · مدير منتج",
    description: "محمد البدر، مدير منتج في سلة. أبني وأنمّي منتجات SaaS عبر المنتج والمحتوى والبيانات والذكاء الاصطناعي.",
    site: "@mo7albader",
    creator: "@mo7albader",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable} ${arabic.variable} ${signature.variable}`}>
      <body className="font-ar">
        <LangProvider>{children}</LangProvider>
        {/* GA4: only the live domain reports, so localhost and preview hosts stay out of the data */}
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
if (/(^|\\.)mo7albader\\.com$/.test(location.hostname)) {
  gtag('js', new Date());
  gtag('config', '${GA_ID}');
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=${GA_ID}';
  document.head.appendChild(s);
}`}
        </Script>
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a178fdbcbefa46a5b179b3dfb5262835"}'
        />
      </body>
    </html>
  );
}
