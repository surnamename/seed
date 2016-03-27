var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var nano = require('gulp-cssnano');
var changed = require('gulp-changed');
var ngmin = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');

var paths = {
  libs: {
    scripts: [
      '../lib/jquery/2.2.2/jquery.min.js',
      '../lib/angular/1.5.2/angular.js',
      '../lib/angular/1.5.2/angular-route.min.js',
      '../lib/angular/1.5.2/angular-resource.min.js',
      '../lib/angular/1.5.2/angular-animate.min.js'
    ],
    styles: [
      '../lib/bootstrap/3.3.6/bootstrap.min.css'
    ],
    fonts: []
  },
  scripts: '../app/**/*.js',
  styles: '../app/**/*.css',
  sprites: '../app/**/img-css/*.css',
  images: '../app/**/img/**/*.',
  templates: {
    components: '../app/**/components/**/view.html',
    pages: '../app/**/pages/**/view.html',
    modals: '../app/**/modals/**/view.html'
  },
  build: {
    js: [
      '../build/js/libs.min.js',
      '../build/js/scripts.min.js',
      '../build/js/templates.js'
    ],
    css: [
      '../build/css/libs.min.css',
      '../build/css/styles.min.css',
      '../build/css/sprites.css'
    ],
    templates: '../build/templates/**/*.js'
  }
};

gulp.task('images', [], function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('../build/img'));
});

gulp.task('sprites', [], function () {
  return gulp.src(paths.sprites)
    .pipe(nano())
    .pipe(concat('sprites.css'))
    .pipe(gulp.dest('../build/css'));
});

gulp.task('fonts', [], function () {
  return gulp.src(paths.libs.fonts)
    .pipe(gulp.dest('../build/fonts'));
});

gulp.task('libStyles', [], function () {
  return gulp.src(paths.libs.styles)
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest('../build/css'));
});

gulp.task('libScripts', [], function () {
  return gulp.src(paths.libs.scripts)
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task('styles', [], function () {
  return gulp.src(paths.styles)
    .pipe(changed('../build/css'))
    .pipe(sourcemaps.init())
    .pipe(nano())
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../build/css'));
});

gulp.task('scripts', [], function () {
  return gulp.src(paths.scripts)
    .pipe(changed('../build/js'))
    .pipe(sourcemaps.init())
    .pipe(ngmin())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task('tempComponents', [], function () {
  return gulp.src(paths.templates.components)
    .pipe(changed('../build/templates'))
    .pipe(templateCache('components.js', {
      module: 'app', transformUrl: function (url) {
        return 'app/' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../build/templates'));
});

gulp.task('tempPages', [], function () {
  return gulp.src(paths.templates.pages)
    .pipe(changed('../build/templates'))
    .pipe(templateCache('pages.js', {
      module: 'app', transformUrl: function (url) {
        return 'app/' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../build/templates'));
});

gulp.task('tempModals', [], function () {
  return gulp.src(paths.templates.modals)
    .pipe(changed('../build/templates'))
    .pipe(templateCache('modals.js', {
      module: 'app', transformUrl: function (url) {
        return 'app//' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../build/templates'));
});

gulp.task('templates', ['tempComponents', 'tempPages', 'tempModals'], function () {
  return gulp.src(paths.build.templates)
    .pipe(changed('../build/js'))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('../build/js'));
});

gulp.task('allStyles', ['libStyles', 'styles', 'sprites'], function () {
  return gulp.src(paths.build.css)
    .pipe(changed('../build'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../build'));
});

gulp.task('allScripts', ['libScripts', 'scripts', 'templates'], function () {
  return gulp.src(paths.build.js)
    .pipe(changed('../build'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../build'));
});

gulp.task('watch', ['allStyles', 'allScripts'], function () {
  gulp.watch(paths.styles, ['allStyles']);
  gulp.watch(paths.scripts, ['allScripts']);
  gulp.watch(paths.templates.components, ['allScripts']);
  gulp.watch(paths.templates.pages, ['allScripts']);
  gulp.watch(paths.templates.modals, ['allScripts']);
});

gulp.task('default', [
  'images',
  //'fonts',
  'allStyles',
  'allScripts',
  'watch'
]);