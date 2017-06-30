const gulp = require('gulp');
const inject = require('gulp-inject');
const serve = require('gulp-serve');
const wiredep = require('wiredep').stream;
const connect = require('gulp-connect');
const cors = require('cors');

const paths = {
    css: ['www/css/**/*.css', 'www/lib/bootstrap/dist/css/bootstrap.min.css'],
    js: ['www/js/**/*.js',
         '!www/js/app.js']
}

gulp.task('inject', function (done) {
  gulp.src('www/index.html')
    .pipe(inject(gulp.src(paths.js, { read: false }), { relative: true }))
    .pipe(inject(gulp.src(paths.css, { read: false }), { relative: true }))
    .pipe(wiredep())
    .pipe(gulp.dest('www'))
    .on('end', done);
});

gulp.task('connect', function() {
  connect.server({
    root: 'www',
    middleware: function() {
      return [cors()];
    }
  });
});

gulp.task('serve', ['inject'], serve('www'));