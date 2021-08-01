module.exports = {
  mode: 'jit',
  purge: [
    'index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: 'hsl(263, 55%, 52%)',
        dgrayBlue: 'hsl(217, 19%, 35%)',
        blackBlue: 'hsl(219, 29%, 14%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lgrayBlue: 'hsl(210, 46%, 95%)',
      },
      fontFamily: {
        barlow: 'Barlow Semi Condensed, sans-serif',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
