const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");

function styles() {
  return gulp.src("src/scss/style.scss")
    //.pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ level: 2, format: false }))
    //.pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
}

function scripts() {
  return gulp.src("src/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
}

exports.default = gulp.series(gulp.parallel(styles, scripts));
