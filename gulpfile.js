/* jshint node:true */

var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sass        = require('gulp-sass'),
    csso        = require('gulp-csso'),
    uglify      = require('gulp-uglify'),
    jade        = require('gulp-jade'),
    concat      = require('gulp-concat'),
    livereload  = require('gulp-livereload'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
    tinylr      = require('tiny-lr'),
    express     = require('express'),
    app         = express(),
    marked      = require('marked'), // For :markdown filter in jade
    path        = require('path'),
    server      = tinylr();
 
 
// --- Basic Tasks ---
gulp.task('css', function() {
  return gulp.src('www/src/assets/stylesheets/*.scss')
    .pipe( 
      sass( { 
        includePaths: ['www/src/assets/stylesheets'],
        errLogToConsole: true
      } ) )
    .pipe( csso() )
    .pipe( gulp.dest('www-build/assets/stylesheets/'))
    .pipe( livereload( server ));
});
 
gulp.task('js', function() {
  return gulp.src('www/src/assets/scripts/*.js')
    .pipe( uglify() )
    .pipe( concat('all.min.js'))
    .pipe( gulp.dest('www-build/assets/scripts/'))
    .pipe( livereload( server ));
});
 
gulp.task('templates', function() {
  return gulp.src('www/src/template/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('www-build/template'))
    .pipe( livereload( server ));
});

gulp.task('express', function() {
  app.set('views', __dirname + '/www-build/template');
  app.set('view engine', 'html');
  app.use(express.static(__dirname + '/www-build'));
  app.get('*', function(req, res){
    app.render('index');
  });
  app.listen(8080);
  gutil.log('Listening on port: 8080');
});
 
gulp.task('watch', function () {

    gulp.watch('www/src/assets/stylesheets/*.scss',['css']);
 
    gulp.watch('www/src/assets/scripts/*.js',['js']);
 
    gulp.watch('www/src/template/*.jade',['templates']);
    
});
 
// Default Task
gulp.task('default', ['js','css','templates', 'express','watch']);