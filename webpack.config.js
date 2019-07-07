var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackAssetsManifest = require("webpack-assets-manifest");

module.exports = {
  entry: {
    container: "./src/index.js",
    Browse: "./src/browse/index.js",
    Restaurant: "./src/restaurant/index.js",
    components: "./src/components/button.js"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-[hash].js",
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: "/"
  },
  devServer: {
    port: 8080,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "index.html",
      chunks: ["container", "components"]
    }),
    new WebpackAssetsManifest({
      output: "assets-manifest.json"
    })
  ]
};
