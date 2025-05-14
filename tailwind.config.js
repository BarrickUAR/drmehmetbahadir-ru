import defaultTheme from "tailwindcss/defaultTheme";
import textShadow from "tailwindcss-textshadow"; // plugin

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lora)", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        custom: "-1px 4px 6px rgba(0,0,0,0.66)",
      },
    },
  },
  plugins: [textShadow],
};

export default config;
