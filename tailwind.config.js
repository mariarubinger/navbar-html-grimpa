module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-1': '#EDE9E8',
        'grey-2': '#7A736F', //texts
        'grey-3': '#56504C', //background 'Nosso jeito' and texts
        'white': '#FFFFFF', //background navbar, 'Sócios', texts
        'coral': '#FF6D65', //background, numbers, hover link navbar, icons
        'nude': '#F0EEED', //background 'Cases', 'Depoimentos'
      }
    },

/*       fontFamily: {
        'body': ['Dinot Black'],
      },  */

    /* Para centralizar contêineres por padrão */
    container: {
      center: true,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
