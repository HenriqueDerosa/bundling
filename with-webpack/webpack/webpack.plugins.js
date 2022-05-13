const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = [
  new BundleAnalyzerPlugin({
    analyzerMode:
      process.env.NODE_ENV === "development" ? "server" : "disabled",
    openAnalyzer: process.env.NODE_ENV !== "development",
  }),
  new HtmlWebpackPlugin({
    template: "./dist/index.html",
    filename: "./index.html",
  }),
];
