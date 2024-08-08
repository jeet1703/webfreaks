/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dangsik: ['Dangsik', 'sans-serif'],
        dangsikOblique: ['Dangsik Oblique', 'sans-serif'],
        dangsikInkTrap: ['Dangsik Ink Trap', 'sans-serif'],
        dangsikInkTrapOblique: ['Dangsik Ink Trap Oblique', 'sans-serif'],
      },
    },
  },
  plugins: [],
}