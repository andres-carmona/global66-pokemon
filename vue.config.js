require("path");

// const CopyWebpackPlugin = require("copy-webpack-plugin");

process.env.VUE_APP_PUBLIC_PATH = process.env.PUBLIC_PATH;

module.exports = {
  publicPath: process.env.PUBLIC_PATH ? `/${process.env.PUBLIC_PATH}/` : "/",
  configureWebpack: {
    devtool: "source-map",
  },
  pages: {
    index: {
      entry: "src/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  devServer: {
    clientLogLevel: "warning",
    hot: true,
    contentBase: "dist",
    compress: true,
    open: true,
    overlay: { warnings: false, errors: true },
    publicPath: "/",
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        const opt = options;
        opt.compilerOptions.preserveWhitespace = true;
        return options;
      });
  },
  productionSourceMap: false,

  lintOnSave: true,
  pluginOptions: {},

  transpileDependencies: ["resize-detector"],
};
