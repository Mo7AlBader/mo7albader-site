import type { Metadata } from "next";
import { Rajdhani, Poppins, IBM_Plex_Sans_Arabic, Waterfall } from "next/font/google";
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
  // NOTE: switch to https://mo7albader.com once DNS points here (then OG images resolve on the brand domain)
  metadataBase: new URL("https://mo7albader-site.vercel.app"),
  title: {
    default: "Mohammed AlBader · Product Manager",
    template: "%s · Mohammed AlBader",
  },
  description:
    "Product Manager, builder and founder from Riyadh. I take ideas from a blank page to products millions use. 2M+ users, 300K+ students, 6M+ views.",
  keywords: [
    "Mohammed AlBader",
    "محمد البدر",
    "Product Manager",
    "Product Advisory",
    "Salla",
    "AbdihQT",
    "Riyadh",
    "PM",
    "Growth",
  ],
  authors: [{ name: "Mohammed AlBader" }],
  creator: "Mohammed AlBader",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Mohammed AlBader",
    title: "Mohammed AlBader · Product Manager",
    description:
      "Product Manager, builder and founder from Riyadh. From a blank page to products millions use.",
    url: "/",
    locale: "ar_SA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed AlBader · Product Manager",
    description: "Product Manager, builder and founder from Riyadh.",
    creator: "@mo7albader",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${display.variable} ${body.variable} ${arabic.variable} ${signature.variable}`}>
      <body className="font-ar">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
