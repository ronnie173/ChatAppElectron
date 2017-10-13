const {join} = require("path"),
    webpack = require("webpack");

module.exports = {
    entry: join(__dirname, "app/renderer.jsx"),
    target: "electron-renderer",
    output: {
        path: join(__dirname, "app/build"),
        filename: "renderer.js"
    },
    module: {
         rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["es2017", "react"],
                        plugins: ["transform-class-properties"]
                    }
                }]


            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],

            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        publicPath: "./build/"
                    }
                }]
            }


        ]
    }
};