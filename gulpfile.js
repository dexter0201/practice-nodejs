(function () {
    'use strict';

    const gulp = require('gulp');
    const eslint = require('gulp-eslint');

    gulp.task('eslint', () => {
        return gulp.src([
            '**/*.js',
            '!node_modules/**'
        ])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
    });

    gulp.task('default', ['eslint'], () => {
        //console.log('This will only run if the eslint task is successful...');
    });
}());