/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffafcc",
        secondary: "#bde0fe",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Danfo", "serif"],
      },
    },
  },
  plugins: [],
};
