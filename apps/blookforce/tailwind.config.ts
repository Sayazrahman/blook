import sharedConfig from "../../tailwind.config";

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      ...(sharedConfig.theme?.extend || {}),
    },
  },
};
