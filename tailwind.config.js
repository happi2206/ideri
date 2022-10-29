/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        light: '#FBFBFB',
        dark: '#232323',
        primary: '#484646',
        customgray800: '#6D6B6B',
        customgray600: '#919090',
        customgray200: '#DADADA',
      },
    },
  },
  plugins: [],
};
