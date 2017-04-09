
const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
    entry:"./app/index.js",
    output:{
        path:path.resolve('./build'),
        filename:'bundle.js'
    },
    devServer:{
        port:3000,
        inline:true,
        contentBase:'build'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./app/index.html'
        })
    ],
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:"babel-loader",
                query:{
                    presets:["react","es2015"]
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test:/\.(jpg|png|gif)$/,
                loader:"url-loader?limit=7000"
            },
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.(txt)$/,
                loader:"url-loader?limit=1"
            }
        ]
    }
};