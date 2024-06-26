/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "font1": "Arya",
        "font2": "Carattere",
      },
      colors: {
        "light": "#D0C2CF",
        "dark": "#17091A",
        "semi": "#52344B",
      },
    },
  },
  plugins: [],
}