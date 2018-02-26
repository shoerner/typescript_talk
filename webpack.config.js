var path = require("path");

module.exports = {
  entry: ["./src/main.tsx"],

  output: {
    path: path.resolve(__dirname, "presentation"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        options: {
          name: '[sha512:hash:base64:7].[ext]'
        }
      }
    ]
  },

  devServer: {
    publicPath: "/",
    contentBase: "./presentation",
    hot: true,
  }
};
