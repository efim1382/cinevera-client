const path = require("path");
const webpackConfig = require("./webpack.config");
const { merge } = require("webpack-merge");

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
});
