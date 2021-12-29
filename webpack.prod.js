const path=require ("path");
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const HtmlWebpackPlugin=require("html-webpack-plugin");
const WorkBox=require("workbox-webpack-plugin");


module.exports={

    entry:"./src/client/index.js",

    mode:"production",

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js',
        assetModuleFilename:"imgs/[name][ext]",
        library:"Client",
        libraryTarget:"var",
        clean:true
    },
    
    module :{
        rules:[
            {
                test: /\.(js)$/i,
                exclude:"/node_modules/",
                use:["babel-loader"]
            },

            {
                test: /\.s?css$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader", "sass-loader"]
            },
            

            {
                test:/\.(png|jpe?g|svg|gif)$/i,
                type:"asset"
            }
        ]
    },

    plugins: [

        new MiniCssExtractPlugin({
            filename:"index.css"
        }),

        new HtmlWebpackPlugin({
            template:"./src/client/views/index.html",
            filename:"./index.html"
        }),

        new WorkBox.GenerateSW()
    ]

}