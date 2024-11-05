/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          'preahvihear': ['Preahvihear', 'sans-serif'],
        },
      },
    },
  },
  darkMode: 'class', // Enables class-based dark mode
  plugins: [
    require('daisyui'),
  ],
};
