//Подключаем галп
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const less = require("gulp-less");

gulp.task('html', () => {
  return gulp.src('source/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('css', function () {
  return gulp.src('source/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('build/css'));
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  gulp.watch('./source/*.html', gulp.series('html'))
  gulp.watch("./source/*.html").on('change', browserSync.reload);
});

//Таск по умолчанию, Запускает del, styles, scripts и watch
gulp.task('start', gulp.series('watch', 'html'));
