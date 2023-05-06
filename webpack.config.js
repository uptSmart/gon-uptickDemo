const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        main: "./src/main.js",
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,  "dist")
    },
    devServer: {
        port: 8081,
        proxy:{ 
            '/uptick': {
                target: 'http://52.74.190.214:26657/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                '^/uptick':'/'
                }
            },
            '/iris': {
                target: 'http://34.80.93.133:26657/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                '^/iris':'/'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            chunks: ["main"]
        })
    ]
};
