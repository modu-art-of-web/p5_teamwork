var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	// entry:{
	// 	app: './src/index.js',
	// 	print: './src/print.js'
	// },
	entry: {
		index: './src/index.js'
		// vendor: ['lodash'],
		// another: './src/another-module.js'
	},
	module: {
		rules: [{
		  test: /\.(png|jpg)$/,
		  use: [{
		    loader: 'url-loader',
		    options: { limit: 10000 } // 10k 이하 이미지는 base64 문자열로 변환
		  }]
		}]
	},
	plugins: [

		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Output Management'
		})
		// new webpack.optimize.CommonsChunkPlugin({
		//   name: 'common' // Specify the common bundle's name.
		// })
	],
	output: {
		// filename: 'bundle.js',
		filename: '[name].bundle.js',
		chunkFilename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// devtool: "inline-source-map"
};