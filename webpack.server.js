const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

const config = {
  // Inform webpack we're building a bundle for Node.js rather than the browser (Default)
  target: "node",
  // Tell webpack the root file of our server app
  entry: "./src/index.js",
  // Tell webpack where to put the output file that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  // don't include anything in our server side bundle that is already in node_modules
  externals: [webpackNodeExternals()],
};

module.exports = merge(baseConfig, config);
