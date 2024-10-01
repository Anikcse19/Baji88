/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14805e",
        yellow: "#ffde1a",
      },
    },
  },
  plugins: [],
};
