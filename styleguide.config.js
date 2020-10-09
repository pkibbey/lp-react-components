module.exports = {
  sections: [
    {
      name: 'Get started',
      description:
        'This guide will help you install and setup the React UI component library',
      content: 'src/intro.md',
      components: 'src/components/**/index.js'
    }
  ],
  ribbon: {
    url: 'https://pkibbey.github.io/lp-react-components'
  },
  theme: {
    color: {
      ribbonBackground: '#005EF4'
    },
    fontSize: {
      base: 13,
      h4: 16
    }
  },
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
        },
        {
          test: /\.svg$/,
          loader: 'file-loader'
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
