const path = require("path");
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dotenv = require("dotenv").config({ path: ".env.LOCAL" });
const env = dotenv.parsed;

module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "build"),
    publicPath: env.BASE_URL_NAME,
  },

  resolve: {
    extensions: [".js", ".ts", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(svg|png|gif)$/,
        use: "file-loader",
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlPlugin({
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(env),
    }),
    new webpack.WatchIgnorePlugin({ paths: [/\.js$/, /\.d\.ts$/] }),
  ],

  devtool: "inline-source-map",

  devServer: {
    https: true,
    historyApiFallback: true,
    port: 3002,
    hot: true,
    proxy: {
      [env.BASE_URL_NAME]: {
        target: "https://localhost:8081",
        secure: false,
        changeOrigin: true,
        bypass: (req) => {
          if (req.headers.accept.includes("html")) {
            return "/index.html";
          }
        },
      },
    },
  },
};
