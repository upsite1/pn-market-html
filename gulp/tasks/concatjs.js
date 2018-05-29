/*--------------------------------------------------------------
    CONCATENATE ALL FILES .JS
--------------------------------------------------------------*/
var gulp    = require('gulp');
var concat  = require('gulp-concat');

gulp.task('concatjs', function() {
    return gulp.src([
      // JQUERY
      'node_modules/jquery/dist/jquery.js',

      // BOOTSTRAP
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap-select.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/transition.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/dropdown.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap/collapse.js',
      'node_modules/bootstrap-sass/assets/javascripts/moment-with-locales.js',
      'node_modules/bootstrap-sass/assets/javascripts/bootstrap_datetimepicker.js',

      // FUNCTIONS
      '../src/js/functions/general.js'
  ])
    .pipe(concat('all.js'))
    .pipe(gulp.dest('../static/js/'));
});
