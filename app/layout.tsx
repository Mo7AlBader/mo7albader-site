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

// cursive signature mark used on the hero portrait (latin only)
const signature = Waterfall({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-signature",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mo7albader.com"),
  title: {
    default: "Mohammed AlBader · Product Manager",
    template: "%s · Mohammed AlBader",
  },
  description:
    "Product Manager from Riyadh, with a rare edge in growth, AI and building. I grow SaaS products through product, content, data and AI. 2M+ users, 300K+ students, 2,000+ merchants.",
  keywords: [
    "Mohammed AlBader",
    "محمد البدر",
    "Product Manager",
    "SaaS Growth",
    "Product-led Growth",
    "Salla",
    "AbdihQT",
    "Riyadh",
    "AI Product Manager",
  ],
  authors: [{ name: "Mohammed AlBader" }],
  creator: "Mohammed AlBader",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mohammed AlBader",
    title: "Mohammed AlBader · Product Manager",
    description:
      "Product Manager from Riyadh, with a rare edge in growth, AI and building. I grow SaaS products through product, content, data and AI.",
    url: "/",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed AlBader · Product Manager",
    description: "Product Manager from Riyadh, with a rare edge in growth, AI and building.",
    creator: "@mo7albader",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable} ${arabic.variable} ${signature.variable}`}>
      <body className="font-ar">
        <LangProvider>{children}</LangProvider>
        <Script
          strategy="afterInteractive"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "a178fdbcbefa46a5b179b3dfb5262835"}'
        />
      </body>
    </html>
  );
}
