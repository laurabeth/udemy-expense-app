const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
  const isProd = env === "prod";

  return {
    devServer: {
      contentBase: path.join(__dirname, "public"),
      historyApiFallback: true,
      port: 1013,
      publicPath: "/dist/",
    },
    devtool: isProd ? "source-map" : "inline-source-map",
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
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: { sourceMap: true },
            },
            {
              loader: "sass-loader",
              options: { sourceMap: true },
            },
          ],
        },
      ],
    },
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "public", "dist"),
    },
    plugins: [new MiniCssExtractPlugin({ filename: "styles.css" })],
  };
};
