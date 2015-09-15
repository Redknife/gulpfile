var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', [], function(cb) {
  runSequence('sprite', ['sass', 'haml', 'images', 'watch'], cb);
});
