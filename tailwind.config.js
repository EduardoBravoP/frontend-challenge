module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Roboto', sans-serif"
      }
    },
    colors: {
      blue: {
        default: '#3599A8'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
