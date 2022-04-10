

const path = require('path');const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    name: 'browser',
    mode: 'development',
    entry: './src/index.js',
      // Extract css to separate file

    output: {
        path: path.resolve('dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              }
        ]
    },
    plugins: [HtmlWebpackPluginConfig, new MiniCssExtractPlugin()]
}