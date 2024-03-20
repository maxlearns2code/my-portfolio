import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color":"var(--primary-color)",
        "secondary-color":"var(--secondary-color)",
        "tertiary-color":"var(--tertiary-color)",
        "quaternary-color":"var(--quaternary-color)",
        "white-color":"var(--white-color)",
        "black-color":"var(--black-color)",
      },
    },
  },
  plugins: [],
  darkMode:"class"
};
export default config;