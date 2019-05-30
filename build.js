// TODO: File for using webpack-bundle-analyzer without ejecting
process.env.NODE_ENV = "production"
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const webpackConfigProd = require("react-scripts/config/webpack.config");

webpackConfigProd(process.env.NODE_ENV).plugins.push(
  new BundleAnalyzerPlugin({
    analyzerMode: "static",
    reportFilename: "report.html",
  })
);

require("react-scripts/scripts/build");