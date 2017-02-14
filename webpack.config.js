var webpack = require('webpack');
var path = require('path');
var GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

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
	},

	plugins: [
    	new GhPagesWebpackPlugin({
        	path: './public',
        	user: {
                name: 'Markdown Preivewer',
                email: 'danielmooncloud@gmail.com'
            }
    	})
	]	
}