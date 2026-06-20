import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        surface2: "var(--surface-2)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
        mint: "var(--mint)",
        line: "var(--line)",
        muted: "var(--muted)",
        faint: "var(--faint)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        ar: ["var(--font-ar)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
