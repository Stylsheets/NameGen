module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionTimingFunction: {
       'inout-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
