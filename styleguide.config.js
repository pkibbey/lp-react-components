module.exports = {
  components: 'src/components/**/index.js',
  usageMode: 'expand',
  exampleMode: 'expand',
  previewDelay: 300,
  styleguideDir: 'docs/styleguide',
  webpackConfig: {
    optimization: undefined,
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Roboto+Slab&family=Roboto:wght@300;400;700&display=swap'
        }
      ]
    }
  }
}
