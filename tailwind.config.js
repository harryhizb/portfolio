/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html'],
  theme: {
    extend: {},
    screens: {
      'sm': '480px', // Custom small screen
      'md': '768px', // Medium screen
      'lg': '1024px', // Large screen
      'xl': '1280px', // Extra large screen
      '2xl': '1536px', // 2XL screen
      'custom-lg': '1400px', // Custom large screen example
    },
  },
  fontFamily: {
    Nunito: ['Nunito', 'sans-serif'],
  },
  plugins: [],
};