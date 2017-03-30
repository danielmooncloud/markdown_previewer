var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	context: __dirname + '/app',
	entry: './index.jsx',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				exclude: '/node_modules/',
				loaders: ["babel-loader", "eslint-loader"]
			},
			{
				test: /\.(scss|css)$/,
				exclude: "/node_modules/",
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader", 
					use: "css-loader!sass-loader"

				})
			},
			{
				test: /\.jpg$/,
				loader: "url-loader"
			}
		]
	},

	plugins: [
    	new ExtractTextPlugin("[name].css")
	]	
}