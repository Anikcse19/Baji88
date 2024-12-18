/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      bebas: ["Bebas Neue", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
      },
    },
  },
  plugins: [],
};
