const path = ('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: 'development',
    entry:'/js/index.js',
    output:{
        path: path.join(__dirname, 'dist'),
        filename: bungle.js
    },
    module:{
        rules: [
            {
                test:/\.css$/,
                use:['sytle-loader', 'css-loader']
            }
        ]
    },
    plugin:[
        new htmlWebpackPlugin({
            template:'/index.html'
        })
    ]
};