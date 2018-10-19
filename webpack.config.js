const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "development",
  name: "site",
  entry: ["@babel/polyfill", path.resolve(__dirname, "app/src/index.jsx")],
  resolve: {
    extensions: [".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "app/src"),
          path.resolve(__dirname, "node_modules/d3"),
          /packages\/.*\/dist/
        ],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/react"]
          }
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["build"]),
    new HtmlWebPackPlugin({
      template: `${__dirname}/index.html`,
      filename: "index.html"
    }),
    new webpack.ProvidePlugin({
      d3: "d3"
    }),
    new BundleAnalyzerPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    host: "localhost",
    port: 39093,
    historyApiFallback: true
  }
};
