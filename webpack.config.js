const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");
const Dotenv = require("dotenv-webpack");

module.exports = {
	entry: path.resolve(__dirname, "src/index.js"),

	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].bundle.js",
		publicPath: "/",
	},

	resolve: {
		extensions: [
			".js",
			".jsx",
			".json",
		],

		alias: {
			"@master": `${__dirname}/src/@master`,
			"@profile": `${__dirname}/src/@profile`,
			"@panel": `${__dirname}/src/@panel`,
			"components": `${__dirname}/src/components`,
			"compositions": `${__dirname}/src/compositions`,
			"classes": `${__dirname}/src/classes`,
			"api": `${__dirname}/src/api`,
			"actions": `${__dirname}/src/actions`,
			"selectors": `${__dirname}/src/selectors`,
			"reducers": `${__dirname}/src/reducers`,
			"config": `${__dirname}/src/config`,
			"helpers": `${__dirname}/src/helpers`,
			"hooks": `${__dirname}/src/hooks`,
			"store": `${__dirname}/src/store`,
		},

		modules: [
			`${__dirname}/node_modules`, "node_modules",
		],
	},

	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				exclude: /node_modules/,

				use: {
					loader: "babel-loader",
				},
			},

			{
				test: /\.css$/,

				use: [
					{
						loader: "style-loader",
					},

					{
						loader: "css-loader",

						options: {
							modules: {
								mode: "local",
								localIdentName: "[local]___[hash:base64:5]",
							},
						},
					},

					{
						loader: "postcss-loader",

						options: {
							postcssOptions: {
								plugins: [
									[
										postcssPresetEnv({
											features: {
												"nesting-rules": true,
											},
										}),
									],
								],
							},

							sourceMap: true,
						},
					},
				],
			},

			{
				test: /\.(png|jpe?g|gif|ttf|eot|woff|otf|woff2|svg)$/,
				type: "asset/resource",
			},
		],
	},

	plugins: [
		new CleanWebpackPlugin(),

		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		}),

		new Dotenv(),

		/*
		 * new webpack.DefinePlugin({
		 * 	"process.env.API_HOST": JSON.stringify(process.env.API_HOST),
		 * 	"process.env.AWS_ACCESS_KEY_ID": JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
		 * 	"process.env.AWS_SECRET_ACCESS_KEY": JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
		 * 	"process.env.S3_BUCKET_NAME": JSON.stringify(process.env.S3_BUCKET_NAME),
		 * }),
		 */
	],
};
