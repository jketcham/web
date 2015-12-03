var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',

  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        include: __dirname + '/assets',
        exclude: /bundle\.js$/
      }
    ],
    loaders: [
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  plugins: [
    // new BrowserSyncPlugin({
    //   host: 'localhost',
    //   port: 8080
    // })
  ]
};
