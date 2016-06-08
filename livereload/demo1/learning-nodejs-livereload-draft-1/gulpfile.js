var gulp = require('gulp')
var gutil = require('gulp-util');

var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var livereload = require('gulp-livereload');


gulp.task('css', function(){
    gulp.src(['src/css/*.css'])
    .pipe(minifycss())
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest('public/css'))
    .pipe(livereload());    
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/css/*.css', ['css']);
});