const { src, dest, series } = require("gulp");
const imagemin = require("gulp-imagemin");
const del = require("del");
const gulpUsemin = require("gulp-usemin");
const rev = require("gulp-rev");
const cssnano = require("gulp-cssnano");
const uglify = require("gulp-uglify");
const { scripts } = require("./scripts");
const { styles } = require("./styles");

function deleteDistFolder() {
  return del("./docs");
}

function optimizeImages() {
  return src("./app/assets/images/**/*")
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(dest("./docs/assets/images"));
}

function usemin() {
  return src("./app/index.html")
    .pipe(
      gulpUsemin({
        css: [rev(), cssnano()],
        js: [rev(), uglify()]
      })
    )
    .pipe(dest("./docs"));
}

exports.build = series(
  deleteDistFolder,
  optimizeImages,
  series(usemin, styles, scripts)
);
