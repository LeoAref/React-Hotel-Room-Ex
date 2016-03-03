var gulp = require('gulp'),
	sass = require('gulp-sass'),
    moduleImporter = require('sass-module-importer'),
	watch = require('gulp-watch'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify');


gulp.task('scripts', function () {
    return gulp.src(['searchBox.jsx'])
        .pipe(browserify({
            insertGlobals : true,
            transform: ['reactify'],
            extensions: ['.jsx'],
            debug :false
        }))
        .pipe(babel())
        .pipe(gulp.dest('./build'));
});

gulp.task('styles', function () {
	return gulp.src('./searchBox.scss')
		.pipe(sass({
            importer: moduleImporter()
        }))
		.on('error', sass.logError)
		.pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
	gulp.watch(['*.scss', '**/*.scss'], ['styles']);
	gulp.watch(['*.jsx', '**/*.jsx'], ['scripts']);
});