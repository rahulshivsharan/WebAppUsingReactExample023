'use strict';

var path = require('path');
var webpack = require('webpack');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var loaders = require('./webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

// local css modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.css/,
	exclude: /(node_modules|bower_components|public)/,
	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
});

// local scss modules
loaders.push({
	test: /[\/\\]src[\/\\].*\.scss/,
	exclude: /(node_modules|bower_components|public)/,
	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
});
// global css files
loaders.push({
	test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
	loader: ExtractTextPlugin.extract('style', 'css')
});

module.exports = {
  entry: {
		index: [
	    path.resolve(__dirname, './src/index.js')
	  ],
		vendor: ['react', 'react-dom']
	},
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/build',
    filename: 'scripts/[chunkhash].js'
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  module: {
    loaders
  },
  plugins: [
    new WebpackCleanupPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				screw_ie8: true,
				drop_console: true,
				drop_debugger: true
			}
		}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('style/[contenthash].css', {
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
      name:'vendor'
    }),
    new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
    new webpack.optimize.DedupePlugin()
  ]
};
