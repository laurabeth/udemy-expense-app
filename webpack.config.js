const path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    port: 1013,
  },
  devtool: "cheap-module-eval-source-map",
  entry: "./src/playground/expensify-redux.js",
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_module/,
        loader: "babel-loader",
        test: /\.js$/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "public"),
  },
};

//loader
