var path = require('path');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|ogg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'round-the-world-game.min.js',
    library: 'roundTheWorldGame'
  },
  devtool: 'source-map'
};
