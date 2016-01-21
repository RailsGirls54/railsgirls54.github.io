var gulp = require('gulp'),
    serve = require('gulp-serve');

gulp.task('serve', serve({
	root: './',
	port: 80,
}));
