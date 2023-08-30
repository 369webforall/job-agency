const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#3c4858',
        black: '#161c2d',
        'dark-footer': '#161c28',
        primary1: '#5927E5',
        light1: '#D0E6EF',
        green1: '#1A819D',

        primary: '#29abe3',
        primaryDark: '#3829e3',
        logo: '#edebeb',
        bg1: '#4c05b0',
      },
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  plugins: [],
};
