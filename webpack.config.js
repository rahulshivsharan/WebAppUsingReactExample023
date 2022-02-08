'use strict';

var path = require("path");
var webpack = require("webpack");
var loaders = require("./webpack.loaders");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// global css
loaders.push({
    "test" : /\.css$/,
    "exclude" : /[\/\\]src[\/\\]/,
    "loaders" : [
        'style?sourceMap',
        'css'
    ] 
});

// local scss modules
loaders.push({
	"test": /\.scss$/,
	"exclude": /[\/\\](node_modules|bower_components|public)[\/\\]/,
	"loaders": [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
		'postcss',
		'sass'
	]
});

// local css modules
loaders.push({
	"test": /\.css$/,
	"exclude": /[\/\\](node_modules|bower_components|public)[\/\\]/,
	"loaders": [
		'style?sourceMap',
		'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
	]
});

module.exports = {
    "entry" : {
        "index" : [
            path.resolve(__dirname, './src/index.js')
        ]
    },
    "output" : {
        "path" : path.resolve(__dirname, "./build"),
        "publicPath" : 'http://127.0.0.1:6779/',
        "filename" : 'scripts/bundle.js'
    },
    "module" : {
        "loaders" : loaders
    },
    "resolve" : {
        "extensions" : ['', '.js', '.jsx']
    },
    "plugins" : [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            "template" : "./src/index.html"
        })
    ]
};