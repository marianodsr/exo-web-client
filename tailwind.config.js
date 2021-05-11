module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#E2BA9A',
        secondary: '#7D7867',
        brownish: '#ad8464'
      },
      height: {
        fullPage: 'calc(100% - 3.5rem)'
      },
      width: {
        'w-18': '4.5rem'
      }
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
      scale: ['disabled']
      
    },
  },
  plugins: [],
}
