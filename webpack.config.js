const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    clean: true,
  },
  devServer: {
    static: "./dist",
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader", options: { modules: true } },
        ],
      },
      {
        test: /.(png|svg|jpg)$/,
        type: "asset/resource",
      },
      {
        test: /.(ttf)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      filename: "index.html",
      chunks: "all",
      inject: true,
    }),
    // turn only when you want to analyse bundle size
    // new BundleAnalyzerPlugin({})
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
