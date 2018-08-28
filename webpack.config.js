const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function addBundleAnalyzer() {
	if (process.argv.indexOf('development') === -1) {
		return [new BundleAnalyzerPlugin()]
	}
	return []
}


module.exports = {
	resolve: {
		extensions: ['.js', '.vue', '.json'],
	},
	devtool: 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader'
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.sass$/,
				use: [
					'vue-style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							indentedSyntax: true,
							includePaths: ['src/sass']
						}
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV !== 'production'
						? 'vue-style-loader'
						: MiniCssExtractPlugin.loader,
					'css-loader'
				]
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			}
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		}),
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	].concat(addBundleAnalyzer())
}