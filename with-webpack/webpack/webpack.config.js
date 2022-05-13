const path = require("path");

const rules = require("./webpack.rules");
const optimization = require("./webpack.optimization");
const plugins = require("./webpack.plugins");

module.exports = {
  mode: process.env.NODE_ENV === "development" ? "development" : "production",
  // with 'source-map' only a comment is generated into the JS bundle
  devtool:
    process.env.NODE_ENV === "development" ? "inline-source-map" : "source-map",
  devServer: {
    static: "./dist",
  },
  entry: "./src/index.js",
  optimization,
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../", "dist"),
  },
  module: {
    rules,
  },
  plugins,
};
