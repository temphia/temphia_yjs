const path = require('path')

module.exports = {
    entry: {
        easy_provider: './src/easy_provider.js'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js',
        library: 'temphia_yjs',
        libraryTarget: 'umd'
    },
}