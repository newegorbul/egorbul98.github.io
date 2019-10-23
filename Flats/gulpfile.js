"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemaps = require("gulp-sourcemaps");
var less = require("gulp-less");
var autoprefixer = require("autoprefixer");
var postcss = require("gulp-postcss");
var htmlmin = require("gulp-htmlmin");
var csso = require("gulp-csso");
var jsmin = require("gulp-uglify");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");
var del = require("del");
var server = require("browser-sync").create();
var concat = require('gulp-concat');

//---------------------------------------------
gulp.task('scripts', function () {
  return gulp.src(['source/js/libs/*.js'])
    .pipe(concat('tempMin.js'))
    .pipe(jsmin())
    // .pipe(gulp.dest('source/js/temp'))
    // .pipe(gulp.src(['source/js/temp/*.js', 'source/js/script.js']))
    .pipe(gulp.src('source/js/custom/*.js'))
    .pipe(concat('totalScript.js'))
    .pipe(gulp.dest('./build/js'))

    // .pipe(gulp.src(['source/js/jquery-3.4.1.min.js', 'source/js/lazyload.min.js', 'source/js/script.js', 'source/js/']))
    .pipe(gulp.src('source/js/*.js'))
    .pipe(gulp.dest('./build/js'));
});
gulp.task('scriptsCatalog', function () {
  return gulp.src(['source/js/libs/*.js'])
    .pipe(concat('tempMin.js'))
    .pipe(jsmin())
    .pipe(gulp.src('source/js/customCatalog/*.js'))
    .pipe(concat('totalScriptsCatalog.js'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('watchEgor', function () {
  gulp.watch(['source/less/**/*.less', 'source/js/libs/*.js', 'source/js/custom/*.js', 'source/js/customCatalog/*.js', 'source/*.html'], gulp.parallel('css', 'scripts', 'html', 'scriptsCatalog'));
  gulp.watch(['source/img/**/*.{jpg,png,svg}'], gulp.parallel('image'));
});
gulp.task('watchEgorCatalog', function () {
  gulp.watch(['source/less/**/*.less', 'source/*.html'], gulp.parallel('css', 'html'));
  gulp.watch(['source/js/customCatalog/*.js','source/js/libs/*.js'], gulp.parallel('scriptsCatalog'));
  gulp.watch(['source/img/**/*.{jpg,png,svg}'], gulp.parallel('image'));
});
//---------------------------------------------


gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(csso())
    .pipe(rename("style.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task("style", function () {
  return gulp.src("source/less/style.less")
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename("style.css")) // style.min.css
    .pipe(gulp.dest("build/css"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build"));
});

gulp.task("js", function () {
  return gulp.src("source/js/script.js")
    .pipe(plumber())
    .pipe(jsmin())
    .pipe(rename("script.min.js"))
    .pipe(gulp.dest("build/js"));
});

gulp.task("webp", function () {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({
      quality: 90
    }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("image", function () {
  return gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({
        optimizationLevel: 3
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", gulp.series("css", "refresh"));
  gulp.watch("source/img/**/*.{jpg,png,svg}", gulp.series("image", "webp", "refresh"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
  gulp.watch("source/js/**/*.js", gulp.series("js", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.{woff}",
      "source/fonts/**/*.{woff2}",
      "source/img/**",
      "source/js/**",
      "source/*.ico"
    ], {
      base: "source"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
  return del("build");
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "style",
  "image",
  "webp",
  "sprite",
  "html",
  "js"
));

gulp.task("start", gulp.series("build", "server"));