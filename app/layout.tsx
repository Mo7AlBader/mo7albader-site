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
  title: "Mohammed AlBader — Product Manager",
  description:
    "Product Manager · Builder · Founder. Building products that grow, on the road to CPO 2030.",
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
