/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
    fontFamily: {
      'sans': ['Quicksand', 'sans-serif'],
      'signika': ['Signika', 'sans-serif'],
    }}
  },
  plugins: [],
}