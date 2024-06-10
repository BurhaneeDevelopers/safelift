/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},

    screens: {
      xsm: "290px",
      xxs: "350px",
      xs: "450px",
      sxm: "576px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1320px",
      "3xl": "1380px",
      "4xl": "1420px",
      "5xl": "1540px",
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
