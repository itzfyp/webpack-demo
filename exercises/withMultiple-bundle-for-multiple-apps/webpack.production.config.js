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
    /**
     *  Entry for multiple app index file
     */
    entry: {
        btn: './buttonWithText.js',
        kiwi: './kiwi.js'
    },

    /**
     *  resovlve name for multiple app index file
     */
    output: {
        filename: '[name].[hash].js',
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

        /**
            *  Entry for multiple app index files STYLES
            */
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: 'index.hbs',
            description: 'some description'
        })
    ]
}