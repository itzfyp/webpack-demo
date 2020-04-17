const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 *  remove { Teserplugin } from development mode
 * 
 *  In development, developer should be acccess not minified files in browser
 *  const TerserPlugin = require('terser-webpack-plugin');
 */


/**
 *  remove { MiniCssExtractPlugin } from development mode
 * 
 *  In order to avoid seeing all styles in a single file for developer
 *  const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 *  For development 
 *  - remove [hash] generation with filename to avoid browser caching
 * 
 */

module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
                //use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
                //use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
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
         *  remove { Teserplugin } from development mode
         * 
         *  In development, developer should be acccess not minified files in browser
         *  new TerserPlugin(),
         */


        /**
        *  remove { MiniCssExtractPlugin } from development mode
        * 
        *  In order to avoid seeing all styles in a single file for developer
        *  new MiniCssExtractPlugin({
        *   filename: 'style.css'
        *  }),
        */


        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack demo',
            template: 'index.hbs',
            description: 'some description'
        })
    ]
}