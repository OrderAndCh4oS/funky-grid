var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', function () {
    "use strict";
    return gulp.src('src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app'));
});