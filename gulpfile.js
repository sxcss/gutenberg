gulp = require("gulp");
concat = require("gulp-concat");
stripCssComments = require("gulp-strip-css-comments");
whitespace = require("gulp-whitespace");
removeEmptyLines = require('gulp-remove-empty-lines');

gulp.task("base", function() {
  return gulp
  .src("./src/base/**/*.scss")
    .pipe(concat("a_base.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("blocks", function() {
  return gulp
    .src("./src/blocks/**/*.scss")
    .pipe(concat("b_blocks.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("options", function() {
  return gulp
    .src("./src/options/**/*.scss")
    .pipe(concat("c_options.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});

gulp.task("views", function() {
  return gulp
    .src("./src/views/**/*.scss")
    .pipe(concat("d_views.scss"))
    .pipe(gulp.dest("./scripts/build/"))
});


gulp.task("index", function() {
  return gulp
    .src("./scripts/build/*.scss")
    .pipe(concat("index.scss"))
    .pipe(stripCssComments())
    .pipe(removeEmptyLines({
      removeComments: true
    }))
    .pipe(whitespace({
      spacesToTabs: 4,
      removeTrailing: true
    }))
    .pipe(gulp.dest("./"));
});
