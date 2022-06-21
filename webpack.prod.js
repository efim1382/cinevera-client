const webpackConfig = require("./webpack.config");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(webpackConfig, {
	mode: "production",

	optimization: {
		noEmitOnErrors: true,
		minimize: true,

		minimizer: [
			new TerserPlugin({
				parallel: true,

				terserOptions: {
					sourceMap: true,
				},
			}),
		],

		splitChunks: {
			chunks: "all",
		},

		runtimeChunk: {
			name: "runtime",
		},
	},

	plugins: [
		new CopyPlugin({
			patterns: [
				{ from: "./src/server.js", to: "server.js" },
			],
		}),
	],
});
