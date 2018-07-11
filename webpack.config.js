var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'public/js'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    mode: 'development',
    node: {
        fs: 'empty'
      }
};