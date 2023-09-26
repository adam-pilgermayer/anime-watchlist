const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
	entry: {
		index: "./src/js/index.js",
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "./src/template.html"),
			filename: "index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/", // "/" in dev || "/dist/" in prod
		assetModuleFilename: "assets/[dirname]/[name][ext]",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env", { targets: "defaults" }]],
					},
				},
			},
			{
				test: /\.(sa|sc|c)ss$/i,
				exclude: /node-modules/,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"resolve-url-loader",
					{
						loader: "sass-loader",
						options: {
							sourceMap: true,
						},
					},
				],
			} /*
			{
				test: /\.(png|svg|jpe?g|gif|webp|ico)$/i,
				loader: "file-loader",
				options: {
					name: "[name].[contenthash].[ext]",
					outputPath: "assets/images",
					emitFile: true,
					esModule: false,
				},
			}*/,
			{
				test: /\.(png|svg|jpe?g|gif|webp|ico)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/images/[name][ext]",
				},
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf$)/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext]",
				},
			},
		],
	},
};
