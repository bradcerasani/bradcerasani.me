const gulp = require('gulp');
const size = require('gulp-size');
const browserSync = require('browser-sync');

// Postcss
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const customProperties = require('postcss-custom-properties');
const calc = require('postcss-calc');
const customMedia = require('postcss-custom-media');
const autoprefixer = require('autoprefixer');
const removeRoot = require('postcss-remove-root');
const discardComments = require('postcss-discard-comments');
const reporter = require('postcss-reporter');

// Define paths
const paths = {
  html: {
    all: './src/**/*.html',
    output: './dist',
  },
  styles: {
    all: './src/assets/styles/**/*.css',
    input: './src/assets/styles/main.css',
    output: './dist/styles',
  },
};

// BrowserSync setup
browserSync.create();
const reload = browserSync.reload;

// Serve task
function serve() {
  browserSync.init({
    notify: false,
    open: false,
    server: {
      baseDir: './dist',
    },
  });
}

gulp.task(serve);

function html() {
  return gulp.src(paths.html.all)
    .pipe(gulp.dest(paths.html.output))
    .pipe(reload({ stream: true }));
}

gulp.task(html);

// Style pipeline
const styleProcessors = [
  atImport,
  customProperties,
  calc,
  customMedia,
  autoprefixer,
  removeRoot,
  discardComments,
  reporter,
];

function styles() {
  return gulp.src(paths.styles.input)
    .pipe(postcss(styleProcessors))
    .pipe(gulp.dest(paths.styles.output))
    .pipe(reload({ stream: true }))
    .pipe(size({ showFiles: true, gzip: true }));
}

gulp.task(styles);

// Watch task
function watch() {
  gulp.watch(paths.html.all, html);
  gulp.watch(paths.styles.all, styles);
}

gulp.task(watch);

// Default task
gulp.task('default',
  gulp.series(html, styles, gulp.parallel(serve, watch))
);
