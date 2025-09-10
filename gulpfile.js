const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
// const browserSync = require("browser-sync").create();

function styles() {
  return gulp.src("src/scss/style.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src("src/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp.src("src/*.html")
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

   function serve() {
    /*
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  });
*/
  gulp.watch("src/scss/**/*.scss", styles);
  gulp.watch("src/js/**/*.js", scripts);
  gulp.watch("src/*.html", html);
}
exports.default = gulp.series(gulp.parallel(styles, scripts, html), serve);
