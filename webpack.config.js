var config = {
  entry: './main.js',

  output: {
    path:'/',
    filename: 'index.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      },
      // ,
      // { test: /(\.jade$)/, exclude: /node_modules/, loader: 'jade-loader' },
      { test: /(\.css$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader'] }
      // { test: /(\.styl$)/, exclude: /node_modules/, loaders: ['style-loader', 'css-loader', 'stylus-loader'] },
      // { test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/, exclude: /node_modules/, loader: 'url-loader?importLoaders=1&limit=100000' }
    ]
  }
}

module.exports = config;