const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSourcePlugin = require("html-webpack-inline-source-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const htmlOption = {
    template: "./src/html/index.html",
    filename: "index.html",
    inlineSource: ".(js|css)$"
};

module.exports = {
    mode: "development",
    entry: {
        main: ["./src/js/main.js"]
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, "docs/")
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(htmlOption),
        new HtmlWebpackInlineSourcePlugin(HtmlWebpackPlugin),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/images/",
                    to: ""
                },
                {
                    from: "src/js/serviceworker.js",
                    to: ""
                },
                {
                    from: "src/sound/",
                    to: ""
                },
                {
                    from: "src/manifest.json",
                    to: ""
                },
                {
                    from: "src/meow.json",
                    to: ""
                }
            ]
        })
    ],
    devServer: {
        contentBase: "./docs",
        disableHostCheck: true,
        watchContentBase: true
    }
};
