const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Terser = require('terser');
const jsonminify = require("jsonminify");

const htmlOption = {
    template: './src/html/index.html',
    filename: 'index.html',
    inlineSource: '.(js|css)$',
    minify:{
        collapseWhitespace: true,
        removeComments: true
    }
};

module.exports = {
    mode: 'production',
    entry: {
        main: [
            './src/js/main.js',
        ]
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'docs/')
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
                            sourceMap: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
        terserOptions: {
          ecma: 6,
          compress: true,
          output: {
            comments: false,
            beautify: false
          }
        }
      })]
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
                to : '',
                transform: function(content, path) {
                    return Terser.minify(content.toString()).code.toString();
                }
            },
            {
                from: 'src/sound/',
                to : ''
            },
            {
                from: 'src/manifest.json',
                to : '',
                transform: function(content, path) {
                    return jsonminify(content.toString());
                }
            },
            {
                from: 'src/meow.json',
                to : '',
                transform: function(content, path) {
                    return jsonminify(content.toString());
                }

            }
        ])
    ]
};
