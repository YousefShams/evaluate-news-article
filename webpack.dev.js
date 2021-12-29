const HtmlWebPackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin}=require("clean-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',

    devServer: {
<<<<<<< Updated upstream:webpack.dev.js
        port: 3000,
=======
        port: 5000,
>>>>>>> Stashed changes:webpack.config.js
        watchContentBase:true,
    },

    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new CleanWebpackPlugin({
            verbose: true,
            dry: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}



/*

const path=require ("path");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
//const WorkBox=require("workbox-webpack-plugin");


module.exports={

    entry:"./src/client/index.js",

    mode:"development",
    devtool: 'source-map',


    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
        library:"Client",
        libraryTarget:"var",
    },

    module :{
        rules:[
            {
                test: /\.(js|jsx)$/i,
                exclude:"/node_modules/",
                use:["babel-loader"]
            },

            {
                test: /\.s?css$/i,
                use:["style-loader","css-loader", "sass-loader"]
            },

            {
                test:/\.(png|jpe?g|svg|gif)$/i,
                type:"asset"
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template:"./src/client/views/index.html",
            filename:"./index.html"
        })
    ]

}

*/