
////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Dependencies                                                              //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

var gulp = require('gulp');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  JS                                                                        //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// Clean ///////////////////////////////////////////////////////////////////////

gulp.task('js-clean', function () {
  return gulp.src('./build/js/*.js', {read: false})
    .pipe(clean());
});

// Concatenate Packaged File ///////////////////////////////////////////////////

gulp.task('js-concat', ['js-clean'], function () {
  
  gulp.src(['./src/js/freezeframe.js'])
    .pipe(gulp.dest('./build/js/'));

  return gulp.src([
      './src/js/vendor/jquery-2.1.4.js',
      './src/js/vendor/imagesloaded.pkgd.js',
      './src/js/*.js'
    ])
    .pipe(concat('freezeframe.pkgd.js'))
    .pipe(gulp.dest('./build/js/'));
});

// Uglify //////////////////////////////////////////////////////////////////////

gulp.task('js-uglify', ['js-concat'], function() {
  
  gulp.src(['./build/js/freezeframe.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./build/js/'));

  return gulp.src(['./build/js/freezeframe.pkgd.js'])
    .pipe(uglify())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./build/js/'));

});

// Watch ///////////////////////////////////////////////////////////////////////

gulp.task('js-watch', function () {
  return gulp.watch('./src/js/*.js', ['js-dev']);
});

// Tasks ///////////////////////////////////////////////////////////////////////

gulp.task('js-dev', ['js-concat'])
gulp.task('js', ['js-uglify']);

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  CSS                                                                       //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

// Clean ///////////////////////////////////////////////////////////////////////

gulp.task('css-clean', function () {
  return gulp.src('./build/css/*.css', {read: false})
    .pipe(clean());
});

// SCSS ////////////////////////////////////////////////////////////////////////

gulp.task('css-scss', ['css-clean'], function () {
  return gulp.src([
    './src/scss/*.scss',
  ])
    .pipe(sass())
    .pipe(gulp.dest('./build/css/'));
});

// Minify //////////////////////////////////////////////////////////////////////

gulp.task('css-minify', ['css-scss'], function () {
  return gulp.src('./build/css/*.css')
    .pipe(minifyCss())
    .pipe(rename({
      suffix: ".min",
    }))
    .pipe(gulp.dest('./build/css'));
});

// Watch ///////////////////////////////////////////////////////////////////////

gulp.task('css-watch', function () {
  return gulp.watch('./src/scss/*.scss', ['css-dev']);
});

// Tasks ///////////////////////////////////////////////////////////////////////

gulp.task('css-dev', ['css-scss']);
gulp.task('css', ['css-minify']);

////////////////////////////////////////////////////////////////////////////////
//                                                                            //
//  Default Task                                                              //
//                                                                            //
////////////////////////////////////////////////////////////////////////////////

gulp.task('default', ['js-watch', 'css-watch']);
