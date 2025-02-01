/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ['Kaushan Script', 'cursive'],
      },
      screens: {
        xs: '450px',
        '2xs': '375px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-rtl')],
};
