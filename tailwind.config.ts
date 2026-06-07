import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
      },
      /** يكبر تدريجياً مع عرض الشاشة (بدون حد max-width للصفحة) */
      fontSize: {
        "sinan-watermark": [
          "clamp(1.5rem, 0.75rem + 3.2vw, 6.25rem)",
          { lineHeight: "1.05" },
        ],
      },
      screens: {
        "3xl": "1680px",
        "4xl": "1920px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
