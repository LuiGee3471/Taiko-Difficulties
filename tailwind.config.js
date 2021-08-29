module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header': "url('./image/bg-header.png')",
        'body': "url('./image/bg.jpeg')",
        'song': "url('./image/bg-song.png')"
      }),
      backgroundColor: theme => ({
        ...theme,
        'pop': '#60cad9',
        'anime': '#ffca28',
        'vocaloid': '#d4d6e4',
        'game-music': '#d6a1ee',
        'variety': '#d6a1ee',
        'classical': '#d2c929',
        'original': '#fe874a'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
