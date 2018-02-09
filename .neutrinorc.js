module.exports = {
  use: [
    [
      '@neutrinojs/react',
      {
        style: {
          style: {},
          css: {},
          loaders: [
            {
              loader: 'sass-loader',
              test: /\.scss$/,
              useId: 'sass',
              options: {
                includePaths: ['node_modules', 'src/scss', '**/scss']
              }
            }
          ],
          test: /\.s?css$/,
          ruleId: 'style',
          styleUseId: 'style',
          cssUseId: 'css',
          hotUseId: 'hot',
          hot: true,
          modules: true,
          modulesSuffix: '-modules',
          modulesTest: /\.module.css$/,
          extractId: 'extract',
          extract: {
            plugin: {},
            loader: {}
          }
        },
        html: {
          title: 'react'
        }
      }
    ],
    '@neutrinojs/mocha',
    'neutrino-preset-postcss-autoprefixer'
  ]
};

