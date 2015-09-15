var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify', 'livereload'], function() {
  gulp.watch(config.sass.src+'**/*.scss', ['sass']);
  gulp.watch(config.haml.src+'**/*.haml', ['haml']);
  gulp.watch(config.images.src+'/*.{png,jpg,jpeg}', ['images']);
  gulp.watch(config.sprite.src, ['sprite']);
});
