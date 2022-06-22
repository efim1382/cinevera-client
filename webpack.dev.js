const webpack = require("webpack");
const path = require("path");
const webpackConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");

module.exports = merge(webpackConfig, {
	mode: "development",
	devtool: "inline-source-map",

	devServer: {
		static: {
			directory: path.join(__dirname, "src"),
		},

		compress: true,
		host: "0.0.0.0",
		port: 8000,
		hot: true,
		historyApiFallback: true,
		allowedHosts: "all",
	},

	plugins: [
		new Dotenv(),

		new webpack.DefinePlugin({
			"process.env.LOCAL_API": JSON.stringify(process.env.LOCAL_API),
		}),
	],
});
