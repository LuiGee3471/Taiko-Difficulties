module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'header': "url('./image/bg-header.png')",
        'body': "url('./image/bg.jpeg')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
