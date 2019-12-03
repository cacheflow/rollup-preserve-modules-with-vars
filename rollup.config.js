module.exports = [
  {
    input: 'src-preserved/index.js',
    output: {
      dir: 'dist-unpreserved',
      format: 'es'
    },
    preserveModules: true
  },

  {
    input: 'src-unpreserved/index.js',
    output: {
      dir: 'dist-unpreserved',
      format: 'es'
    },
    preserveModules: true
  },
]
