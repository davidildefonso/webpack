const path = require('node:path')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: {
		index: {
			import: "./src/index.js",
		//	dependOn: 'shared'   -- shared node module
		},
		print: {
			import: "./src/print.js",
		//	dependOn: 'shared' -- shared node module
		},
	//	shared: "canvas-draw-edit" -- shared node module
	},
	devtool: 'inline-source-map',
	devServer: {
		static: "./dist"
	},
	optimization: {
		// runtimeChunk: "single" -- for bundling entry points
		splitChunks: {
			chunks: "all"
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Development'
		})
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		//publicPath: "/"   this works with the express server when using webpackDevMiddleware
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource"
			},
			{
				test: /\.(csv|tsv)$/i,
				use: ["csv-loader"]
			},
			{
				test: /\.xml$/i,
				use: ["xml-loader"]
			},
			{
				test: /\.json5$/i,
				type: "json",
				parser: {
					parse: json5.parse
				}
			},
			{
				test: /\.yaml$/i,
				type: 'json',
				parser: {
					parse: yaml.parse
				}
			},
			{
				test: /\.toml$/i,
				type: 'json',
				parser: {
					parse: toml.parse
				}
			}
		]
	}
}