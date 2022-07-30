/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#3E4241',
        darkFg: '#F6F7F8',
        darkHighlight: '#585E5C',
        darkHighlightDim: '#4B504F',
        white: '#F6F7F8',
        whiteFg: '#313638',
        whiteHighlight: '#DCD8D8',
        whiteHighlightDim: '#CCC6C6',
      }
    },
  },
  plugins: [],
};

/*
#011627
#FF3366
#F6F7F8
#20A4F3
 */
