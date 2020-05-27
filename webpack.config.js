const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env === "prod";

  return {
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      port: 1013,
    },
    devtool: isProd ? "source-map" : "cheap-module-eval-source-map",
    entry: "./src/app.js",
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
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            "sass-loader",
          ],
        },
      ],
    },
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "public"),
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
  };
};
