/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      barlow: ['Barlow', 'sans-serif'],
      bellefair: ['Bellefair', 'sans-serif'],
      barlow_condensed: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {
      screens: {
        ws: '1440px',
      },
      colors: {
        white: '#ffffff',
        medium_gray: '#979797',
        light_blue: '#d0d6f9',
        grayish_blue: '#383B4B',
        dark_blue: '#0b0d17',
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
};
