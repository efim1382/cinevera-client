const webpack = require("webpack");
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

		new webpack.DefinePlugin({
			"process.env.API_HOST": JSON.stringify(process.env.API_HOST),
			"process.env.AWS_ACCESS_KEY_ID": JSON.stringify(process.env.AWS_ACCESS_KEY_ID),
			"process.env.AWS_SECRET_ACCESS_KEY": JSON.stringify(process.env.AWS_SECRET_ACCESS_KEY),
			"process.env.S3_BUCKET_NAME": JSON.stringify(process.env.S3_BUCKET_NAME),
			"process.env.LOCAL_API": JSON.stringify(process.env.LOCAL_API),
		}),
	],
});
