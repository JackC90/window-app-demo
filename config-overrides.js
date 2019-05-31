// TODO: File for using webpack-bundle-analyzer without ejecting
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = function override(config, env) {
  config.plugins.push(new BundleAnalyzerPlugin());
  return config;
}
