const CopyWebpackPlugin = require("copy-webpack-plugin");
module.exports = {
  // 第三方插件配置
  chainWebpack: (config) => {
    config.plugin("copy").use(require("copy-webpack-plugin"), [
      {
        patterns: [
          {
            from: "./src/packages/less/",
            to: "less/",
          },
        ],
      },
    ]);
  },
};
