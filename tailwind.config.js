/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0a192f",   // navy blue
        secondary: "#64ffda", // sky blue
        light: "#ccd6f6"
      }
    },
  },
  plugins: [],
}
