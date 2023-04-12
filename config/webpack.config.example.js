const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    codemirror: './src/example/codemirror.js'
  },
  output: {
    globalObject: 'self',
    path: path.resolve('./public/build/'),
    filename: '[name].bundle.js',
  },
  devServer: {
    contentBase: path.join("./public/"),
    compress: true,
    publicPath: './build/'
  }
}
