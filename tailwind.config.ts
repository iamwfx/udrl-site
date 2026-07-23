import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        cream: "#ffffff",
        "udrl-pink": "#f5ede8",
        "udrl-blue": "#116dff",
        "udrl-dark": "#2d2d2d",
        "udrl-gray": "#555555",
        "udrl-border": "#d0d0d0",
      },
    },
  },
  plugins: [],
};

export default config;
