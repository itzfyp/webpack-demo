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
    entry: './index.js',
    output: {
        filename: 'bundle.[hash].js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
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
            filename: 'style.[hash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: 'index.hbs',
            description: 'some description'
        })
    ]
}