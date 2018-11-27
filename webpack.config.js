var path = require('path');

// Phaser webpack config
var phaserModule = path.join(__dirname, '/node_modules/phaser-ce/');
var phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
var pixi = path.join(phaserModule, 'build/custom/pixi.js');
var p2 = path.join(phaserModule, 'build/custom/p2.js');
var phaserInput = path.join(__dirname, '/node_modules/@orange-games/phaser-input/build/phaser-input.js');


module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], include: path.join(__dirname, 'client/src') },
      { test: /pixi\.js/, use: ['expose-loader?PIXI'] },
      { test: /phaser-split\.js$/, use: ['expose-loader?Phaser'] },
      { test: /p2\.js/, use: ['expose-loader?p2'] },
      { test: /phaser-input\.js$/, use: ['exports-loader?PhaserInput=true'] }, {
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
  resolve: {
    alias: {
      phaser,
      pixi,
      p2,
      'phaser-input': phaserInput,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'round-the-world-game.min.js',
    libraryTarget:'umd',
    library: 'roundTheWorldGame',
    umdNamedDefine: true
  },
  devtool: 'source-map'
};
