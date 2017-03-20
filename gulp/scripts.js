/**
 * Created by andream16 on 18.03.17.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

gulp.task('scripts', function () {
    return gulp.src(path.join(conf.paths.src, '/app/**/*.js'))
        .pipe(browserSync.reload({ stream: true }))
});