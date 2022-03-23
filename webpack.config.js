const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.js',
        publicPath: '/'

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ],
               
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/
            }
        ]
},
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './public/index.html',
                filname: './index.html'
            }
        ),
        new MiniCssExtractPlugin({
            filename:'[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress:true,
        port:3005,
        historyApiFallback: true
    }
}