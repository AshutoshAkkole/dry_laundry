const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "assets/[hash][ext]",
    clean: true,
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
        test: /.(png|svg|jpg|jpeg)$/,
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
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
