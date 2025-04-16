const { heroui } = require('@heroui/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FAF6F6',
          secondary: '#F2F2F3',
          dark: '#0A0A1D',
        },
        text: {
          primary: '#0A0A1D',
          secondary: '#9D9DA2',

          light: '#FAF6F6',
          muted: '#B5B5BA',
          inverted: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [heroui()],
};
