import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // All apps
    "../../apps/**/*.{js,ts,jsx,tsx}",
    // All packages (like UI)
    "../../packages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
