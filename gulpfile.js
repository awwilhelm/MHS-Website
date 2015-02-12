/* jshint node:true */

var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat');
 
 
// --- Basic Tasks ---
gulp.task('css', function() {
  return gulp.src('www/src/assets/stylesheets/*.scss')
    .pipe( 
      sass( { 
        includePaths: ['www/src/assets/stylesheets'],
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('www-build/assets/stylesheets/') );
});
 
gulp.task('js', function() {
  return gulp.src('www/src/assets/scripts/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('www-build/assets/scripts/'));
});
 
gulp.task('templates', function() {
  return gulp.src('www/src/template/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('www-build/template'));
});
 
gulp.task('watch', function () {

    gulp.watch('www/src/assets/stylesheets/*.scss',['css']);
 
    gulp.watch('www/src/assets/scripts/*.js',['js']);
 
    gulp.watch('www/src/template/*.jade',['templates']);
    
});
 
// Default Task
gulp.task('default', ['js','css','templates','watch']);