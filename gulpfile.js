const { styles } = require("./gulp/styles.js");
const { scripts } = require("./gulp/scripts.js");
const { watch } = require("./gulp/watch.js");
const { build } = require("./gulp/build.js");

module.exports = {
  styles,
  scripts,
  watch,
  build
};
