const { src } = require("gulp");
const browserSync = require("browser-sync").create();
const gulpWatch = require("gulp-watch");
const { scripts } = require("./scripts");
const { styles } = require("./styles");

function watch() {
  browserSync.init({
    server: {
      baseDir: "app",
      notify: false
    }
  });

  gulpWatch("./app/index.html", () => {
    browserSync.reload();
  });

  gulpWatch("./app/assets/styles/**/*.css", () => {
    cssInject();
  });

  gulpWatch("./app/assets/scripts/**/*.js", () => {
    javascript();
  });
}

function javascript() {
  scripts();
  browserSync.reload();
}

function cssInject() {
  styles();
  return src("./app/temp/styles/main.css").pipe(browserSync.stream());
}

exports.watch = watch;
