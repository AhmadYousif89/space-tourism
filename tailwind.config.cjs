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
      keyframes: {
        'slide-down': {
          '0%': { transform: 'translateY(-2rem)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 100 },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-2rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 100 },
        },
      },
      animation: {
        'slide-down': 'slide-down 750ms ease forwards',
        'slide-right': 'slide-right 750ms ease forwards',
      },
    },
  },
  plugins: [],
};
