/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ['./templates/*.html'],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'Poppins']
    },
    screens: {
      'xs' : '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

