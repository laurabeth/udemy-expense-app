const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

if (process.env.NODE_ENV === "test") {
  require("dotenv").config({ path: "env.test" });
} else if (process.env.NODE_ENV === "development") {
  require("dotenv").config({ path: "env.development" });
}

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
    plugins: [
      new MiniCssExtractPlugin({ filename: "styles.css" }),
      new webpack.DefinePlugin({
        "process.env.FIREBASE_API_KEY": JSON.stringify(process.env.FIREBASE_API_KEY),
        "process.env.FIREBASE_APP_ID": JSON.stringify(process.env.FIREBASE_AP_ID),
        "process.env.FIREBASE_AUTH_DOMAIN": JSON.stringify(
          process.env.FIREBASE_AUTH_DOMAIN,
        ),
        "process.env.FIREBASE_DATABASE_URL": JSON.stringify(
          process.env.FIREBASE_DATABASE_URL,
        ),
        "process.env.FIREBASE_MESSAGING_SENDER_ID": JSON.stringify(
          process.env.FIREBASE_MESSAGING_SENDER_ID,
        ),
        "process.env.FIREBASE_PROJECT_ID": JSON.stringify(
          process.env.FIREBASE_PROJECT_ID,
        ),
        "process.env.FIREBASE_STORAGE_BUCKET": JSON.stringify(
          process.env.FIREBASE_STORAGE_BUCKET,
        ),
      }),
    ],
  };
};
