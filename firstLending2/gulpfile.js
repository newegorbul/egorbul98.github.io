let gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  imagemin = require('gulp-imagemin');


gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function () {
  return gulp.src(['src/js/libs/*.js', 'src/js/custom.js', '!src/js/libs/lazyload.js'])
    .pipe(concat('libs.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js'))
    .pipe(gulp.src('src/js/jquery-3.4.1.min.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('imagemin', function () {
  return gulp.src('src/img/**/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./img'))
});

gulp.task('watch', function() {
    gulp.watch(['src/scss/**/*.scss',  '!src/js/libs/lazyload.js', 'src/js/libs/*.js', 'src/js/custom.js'], gulp.series('sass', 'scripts'));
});