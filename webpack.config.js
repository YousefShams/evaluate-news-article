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
        assetModuleFilename:"imgs/[name][ext]",
        library:"Client",
        libraryTarget:"var",
        clean:true
    },

    devServer: {
        port: 5000,
        watchContentBase: true,
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