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
		},
	},
	devtool: 'inline-source-map',
	devServer: {
		static: "./dist"
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