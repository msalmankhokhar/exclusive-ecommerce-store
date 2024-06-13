/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./templates/*.html'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'Poppins']
    }
  },
  plugins: [],
}

