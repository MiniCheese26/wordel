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
        darkHighlightActive: '#454948',
        darkHighlightBorder: '#646B68',
        darker: '#313433',
        white: '#F6F7F8',
        whiteFg: '#313638',
        whiteHighlight: '#DCD8D8',
        whiteHighlightDim: '#CCC6C6',
        whiteHighlightActive: '#D0CACA',
        whiteHighlightBorder: '#A49898',
        yellow: '#EAA31F',
        green: '#558B6E'
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
