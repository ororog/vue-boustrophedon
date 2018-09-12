module.exports = {
  baseUrl: '',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: 'raw-loader'
        }
      ]
    }
  }
}
