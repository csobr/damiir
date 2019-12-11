
const HtmlWebPackPlugin = require ("html-webpack-plugin");
const MiniCssExtractPlugin = require ("mini-css-extract-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
var BrotliPlugin = require('brotli-webpack-plugin');



module.exports = {
  devtool: "source-map",

  mode: 'development',
  entry: ["./src/index.js"],
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpf|png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.mp4$/,
        use: "file-loader?name=videos/[name].[ext]"
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filname: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CompressionPlugin({
      filename: "[path].br[query]",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false
    }),

    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.(js|css|html|svg)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
};