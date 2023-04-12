const path = require('path')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        easy_provider: './src/index.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: 'temphia_yjs',
        libraryTarget: 'umd'
    },
}