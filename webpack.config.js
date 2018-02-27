var webpack = require('webpack')
var path = require('path')
// var autoprefixer = require('autoprefixer')

module.exports = {
    entry: path.join(__dirname, "src/js/app/index.js"),
    output: {
        path: path.join(__dirname, "./public"),
        filename: "js/index.js"
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ["style-loader","css-loader", "less-loader"]
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       } 
    ]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "src/js/lib/jquery-2.0.3.min.js"),
            mod: path.join(__dirname, "src/js/mod"),
            less: path.join(__dirname, "src/less")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        // new ExtractTextPlugin("css/index.css")
        // new webpack.LoaderOptionsPlugin({
        //     options: {
        //         postcss: [
        //             autoprefixer(),
        //         ]
        //     }
        // })
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),
    ]
};