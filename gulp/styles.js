const { src, dest } = require("gulp");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const nested = require("postcss-nested");
const cssImport = require("postcss-import");
const mixins = require("postcss-mixins");

exports.styles = function() {
  return src("./app/assets/styles/main.css")
    .pipe(postcss([cssImport, mixins, nested, autoprefixer]))
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(dest("./app/temp/styles"));
};
