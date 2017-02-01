/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  connect = require('gulp-connect'),
  gulpSequence = require('gulp-sequence'),
  inject = require('gulp-inject'),
  watch = require('gulp-watch'),
  rev = require('gulp-rev'),
  clean = require('gulp-clean'),
  htmlmin = require('gulp-htmlmin'),
  sass = require('gulp-sass'),
  cleanCSS = require('gulp-clean-css');

//Used libraries
var librariesJS = ['./node_modules/angular/angular.min.js',
    './node_modules/angular-ui-router/release/angular-ui-router.min.js'];

//****************************** Config 'js' tasks ******************************
/*
Concat and minify js files. Create only one file called main.js
*/
gulp.task('js', function () {
  return gulp.src(['./app/app.js', './source/js/*.js', './source/js/services/*.js', './source/js/controllers/*.js'])
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(rev())
  .pipe(gulp.dest('./app/assets/js'))
  .pipe(rev.manifest())
  .pipe(gulp.dest('./app/assets/js'))
});


//****************************** Minify CSS files ******************************
gulp.task('minify-css', ['compile-sass'], function() {
  return gulp.src('./source/css/*.css')
    .pipe(concat('main.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rev())
    .pipe(gulp.dest('./app/assets/css'))
    .pipe(rev.manifest())
    .pipe(gulp.dest('./app/assets/css'));
});

//****************************** Compile SASS files ******************************
gulp.task('compile-sass', function () {
  return gulp.src('./source/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./source/css'));
});

//****************************** Minify HTML ******************************
gulp.task('minify-html', function() {
  return gulp.src('./source/views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./app/views'));
});


//****************************** Build vendor JS folder ******************************
gulp.task('build-vendor-js', function() {
    //Copy vendor files
    return gulp.src(librariesJS)
      .pipe(gulp.dest('./app/assets/js'));
});

//****************************** Inject JS and CSS files in index file ******************************
gulp.task('inject', function () {
  var injected_files = [
      './app/assets/js/angular.min.js',
      './app/assets/js/angular-ui-router.min.js',
      './app/assets/js/main-*.js',
      './app/assets/css/main-*.css'];

  return gulp.src('./app/index.html')
    .pipe(inject( gulp.src( injected_files, {read: false}), {relative: true} ))
    .pipe(gulp.dest('./app'));
});

//****************************** Clean asset folder ******************************
/*
Delete all files in assets folder. After and in other task, put new main.js file
*/
gulp.task('clean-asset', function(){
    return gulp.src(['./app/views', './app/assets/css', './app/assets/js', './source/css/*.css'], {read: false})
      .pipe(clean());
});


//****************************** Watch files js for changes ******************************
gulp.task('watch-assets-files', function() {
    /*
    If some js file change, run clean-asset, js and inject task
    */
    return gulp.watch(['./app/app.js', './source/js/*.js', './source/js/services/*.js', './source/js/controllers/*.js', './source/css/*.scss'], function (event) {
      gulpSequence('clean-asset', 'minify-css', 'js', 'build-vendor-js', 'inject')(function (err) {
        if(err){
          console.log(err)
        }
      })
    });

});


//****************************** Watch files css for changes ******************************
gulp.task('watch-html-files', function() {
    /*
    If some html file change, run minifi-html task
    */
    return gulp.watch(['./source/views/*.html'], function (event) {
      gulpSequence('minify-html')(function (err) {
        if(err){
          console.log(err)
        }
      })
    });
});

//****************************** Start server ******************************
gulp.task('connect', function() {
  connect.server({
    root: './app'
  });
});


//****************************** Run gulp task in develop environment ******************************
/*
When run gulp command in terminal, run tasks in sequence.
*/
gulp.task('default', gulpSequence('clean-asset', 'minify-html', 'minify-css', 'js', 'build-vendor-js', 'inject', 'connect', 'watch-assets-files', 'watch-html-files'));
