module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html'
  ],
  theme: {
    fontFamily: {
        sans: ['Jost', 'sans-serif'],
    },
    extend: {
    },

  },
  variants: {},
  plugins: [],
}
