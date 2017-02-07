var webpack = require('webpack');
var path = require('path');

module.exports = {
	context: __dirname + '/app',
	entry: './index.jsx',
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				loader: "babel-loader"
			},
			{
				test: /\.scss$/,
				loader: "style-loader!css-loader!sass-loader"
			},
			{
				test: /\.jpg$/,
				loader: "url-loader"
			}
		]
	}
	
}