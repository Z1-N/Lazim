/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Futura PT', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        secondary: ['Titillium Web', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/hero-pattern.png')",
        'footer-texture': "url('/src/Assets/footer-texture.png')",
        'pattern': "url(https://www.transparenttextures.com/patterns/brushed-alum.png); ",
      },
    },
  },
  plugins: [],
}