var gulp = require('gulp');

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var babelify = require('babelify');
var less = require('gulp-less');
var plumber = require('gulp-plumber');

var connect = require('gulp-connect');

gulp.task('less', function () {
  gulp.src('./www/src/less/style.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./www/build/css/'));
});

gulp.task('build-js', function() {
  browserify('./www/src/js/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./www/build/js/'))
    .pipe(connect.reload());
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch('./www/src/less/**.less', ['less']);
  gulp.watch('./www/src/js/**/*', ['build-js']);
});

// Development
gulp.task('serve', function () {
	connect.server({
		root: 'www',
		port: 8000,
		livereload: true
	});
});

gulp.task('build', ['less', 'build-js']);
gulp.task('dev', ['serve', 'watch']);
