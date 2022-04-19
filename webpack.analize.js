const webpackProdConfig = require("./webpack.prod");
const merge = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");
const Visualizer = require("webpack-visualizer-plugin");

module.exports = merge(webpackProdConfig, {
  plugins: [
    new CopyPlugin([
      { from: "./src/server.js", to: "server.js" },
    ]),

    new Visualizer({ filename: "./statistics.html" }),
  ],
});
