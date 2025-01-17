/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        green: "#54E6AF",
        blue: {
          950: "#121725",
          900: "#2C344B",
          600: "#5A689A",
          300: "#C2DBE5",
        },
        red: "#FB3E3E",
      },
      spacing: {
        1300: "104px",
        1100: "88px",
        1000: "80px",
        800: "64px",
        700: "56px",
        500: "40px",
        400: "32px",
        300: "24px",
        200: "16px",
        100: "8px",
        50: "4px",
      },
      fontFamily: {
        serif: ["Chivo", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "mobile-preset-1": ["32px", { lineHeight: "120%" }],
        "mobile-preset-2": ["14px", { lineHeight: "150%" }],
        "desktop-preset-1": ["48px", { lineHeight: "120%" }],
        "desktop-preset-2": ["18px", { lineHeight: "150%" }],
        "desktop-preset-3": ["14px", { lineHeight: "200%" }],
      },
    },
  },
  plugins: [],
};
