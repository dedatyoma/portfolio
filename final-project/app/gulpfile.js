var gulp = require('gulp'),
	browserSync = require('browser-sync');
gulp.task ('taskName', function() {
  });
gulp.task('server', function() {
    browserSync({
      server: {
        baseDir: 'app'
      },
      notify: false
    });
  });
  gulp.task('watch', ['server'], function() {
    gulp.watch('index.html', browserSync.reload);
    gulp.watch('scss/style.css', browserSync.reload);
  });