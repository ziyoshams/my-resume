const webpack = require("webpack");

exports.scripts = function(callback) {
  webpack(require("../webpack.config.js"), function(err, stats) {
    if (err) {
      console.log("[Ziyo]::WebpackError", err.toString());
    }
    console.log("[Ziyo]::WebpackStats", stats.toString());
    if (callback) {
      callback();
    }
  });
};
