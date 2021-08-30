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
        default: '#3599A8',
        dark: '#235D6C'
      },
      gray: {
        default: '#CCC',
        dark: '#666',
        light: '#F3F4F6'
      },
      black: {
        default: '#000',
        light: '#090909'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
