var gulp = require('gulp');
var handleErrors = require('../util/handleErrors');
var haml = require('gulp-ruby-haml');
var livereload  = require('gulp-livereload');
var config = require('../config').haml;
var changed = require('gulp-changed');

// Compile Haml into HTML
gulp.task('haml', function() {
  gulp.src(config.src + '*.haml')
      .pipe(changed(config.dest))
      .pipe(haml())
      .on('error', handleErrors)
      .pipe(gulp.dest(config.dest))
      .pipe(livereload());
});
