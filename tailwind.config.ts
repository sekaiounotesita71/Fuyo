import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B111C",
        navy: "#101A2D",
        green: "#183F34",
        smoke: "#F4F6F8",
        line: "#DDE2E8",
        gold: "#A98543"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(11, 17, 28, 0.12)"
      },
      fontFamily: {
        sans: [
          "var(--font-noto-sans-jp)",
          "system-ui",
          "sans-serif"
        ],
        serif: [
          "var(--font-noto-serif-jp)",
          "ui-serif",
          "serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
