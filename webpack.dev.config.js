const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const htmlOption = {
    template: './src/html/index.html',
    filename: 'index.html',
    inlineSource: '.(js|css)$'
};

module.exports = {
    mode: 'development',
    entry: {
        main: [
            './src/js/main.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist/')
    },
    module: {
        rules: [
            {
                test: /\.scss/ ,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: 1
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: 1
                        }
                    }
                ]
            }
        ]
    },
    plugins :[
        new HtmlWebpackPlugin(htmlOption),
        new HtmlWebpackInlineSourcePlugin(),
        new CopyWebpackPlugin([
            {
                from: 'src/images/',
                to : ''
            },
            {
                from: 'src/js/serviceworker.js',
                to : ''
            },
            {
                from: 'src/sound/',
                to : ''
            },
            {
                from: 'src/manifest.json',
                to : ''
            },
            {
                from: 'src/meow.json',
                to : ''
            }
        ])
    ],
    devServer: {
        contentBase: './dist',
    }
};
