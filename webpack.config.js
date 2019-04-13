const path = require("path");

const config = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    mode: "development",
    watch: true,
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 2000
    },
    module: {
        rules: [
            {
                test: /\.js/,
                use: ["babel-loader"],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.css/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[folder]-[name]-[local]_[hash:base64:5]"
                        }
                    }],
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        host: "localhost",
        port: 8888
    }
};

module.exports = config;
