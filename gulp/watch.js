const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');

gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: 'app',
      notify: false
    }
  });

  watch('./app/index.html', function() {
    browserSync.reload();
  });

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

  watch('./app/assets/scripts/**/*.js', function() {
    gulp.start('javascript');
  });
});

gulp.task('javascript', ['scripts'], function() {
  browserSync.reload();
});

gulp.task('cssInject', ['styles'], function() {
  gulp.src('./app/temp/styles/main.css').pipe(browserSync.stream());
});
