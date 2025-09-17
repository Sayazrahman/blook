// tailwind.config.js (root)
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./apps/web/**/*.{js,ts,jsx,tsx}",
    "./packages/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          DEFAULT: "hsl(240 5.9% 10%)",
          foreground: "hsl(0 0% 98%)",
          accent: "hsl(240 4.8% 95.9%)",
          "accent-foreground": "hsl(240 5.9% 10%)",
          border: "hsl(240 5.9% 90%)",
          ring: "hsl(240 5% 64.9%)",
        },
      },
    },
  },
  plugins: [],
};
