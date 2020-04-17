const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * 
 * Removing { TerserPlugin } from production config
 * In production mode Terserplugin will be included by default
 * const TerserPlugin = require('terser-webpack-plugin');
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        btn: './buttonWithText.js',
        kiwi: './kiwi.js'
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/static/'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 7000,
            automaticNameDelimiter: '_'
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['stage-0']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: ['handlebars-loader']
            }
        ]
    },
    plugins: [
        /**
         * 
         * Removing { new TerserPlugin() } from production config
         * In production mode Terserplugin will be included by default
         * new TerserPlugin(),
         */
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'btn.html',
            title: 'webpack demo',
            chunks: ['btn', 'vendors~btn~kiwi'],
            template: 'index-template.hbs',
            description: 'btn'
        }),
        new HtmlWebpackPlugin({
            filename: 'kiwi.html',
            title: 'webpack demo',
            chunks: ['kiwi', 'vendors~btn~kiwi'],
            template: 'index-template.hbs',
            description: 'kiwi'
        })
    ]
}