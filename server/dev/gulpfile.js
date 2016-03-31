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
      '../../client/private/lib/jquery/2.2.2/jquery.min.js',
      '../../client/private/lib/angular/1.5.2/angular.js',
      '../../client/private/lib/angular/1.5.2/angular-route.min.js',
      '../../client/private/lib/angular/1.5.2/angular-resource.min.js',
      '../../client/private/lib/angular/1.5.2/angular-animate.min.js',
      '../../client/private/lib/ui-router/0.2.18/ui-router.min.js',
      '../../client/private/lib/oc-lazy-load/1.0.9/oc-lazy-load.min.js'
    ],
    styles: [
      '../../client/private/lib/bootstrap/3.3.6/bootstrap.min.css'
    ],
    fonts: []
  },
  scripts: '../../client/private/app/**/*.js',
  styles: '../../client/private/app/**/*.css',
  sprites: '../../client/private/app/**/img-css/*.css',
  images: '../../client/private/app/**/img/**/*.',
  templates: {
    components: '../../client/private/app/**/components/**/template.html',
    pages: '../../client/private/app/**/pages/**/template.html',
    modals: '../../client/private/app/**/modals/**/template.html'
  },
  build: {
    js: [
      '../../client/public/build/js/libs.min.js',
      '../../client/public/build/js/scripts.min.js',
      '../../client/public/build/js/templates.js'
    ],
    css: [
      '../../client/public/build/css/libs.min.css',
      '../../client/public/build/css/styles.min.css',
      '../../client/public/build/css/sprites.css'
    ],
    templates: '../../client/public/build/templates/**/*.js'
  }
};

gulp.task('images', [], function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest('../../client/public/build/img'));
});

gulp.task('sprites', [], function () {
  return gulp.src(paths.sprites)
    .pipe(nano())
    .pipe(concat('sprites.css'))
    .pipe(gulp.dest('../../client/public/build/css'));
});

gulp.task('fonts', [], function () {
  return gulp.src(paths.libs.fonts)
    .pipe(gulp.dest('../../client/public/build/fonts'));
});

gulp.task('libStyles', [], function () {
  return gulp.src(paths.libs.styles)
    .pipe(concat('libs.min.css'))
    .pipe(gulp.dest('../../client/public/build/css'));
});

gulp.task('libScripts', [], function () {
  return gulp.src(paths.libs.scripts)
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest('../../client/public/build/js'));
});

gulp.task('styles', [], function () {
  return gulp.src(paths.styles)
    .pipe(changed('../../client/public/build/css'))
    .pipe(sourcemaps.init())
    .pipe(nano())
    .pipe(concat('styles.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../../client/public/build/css'));
});

gulp.task('scripts', [], function () {
  return gulp.src(paths.scripts)
    .pipe(changed('../../client/public/build/js'))
    .pipe(sourcemaps.init())
    .pipe(ngmin())
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../../client/public/build/js'));
});

gulp.task('tempComponents', [], function () {
  return gulp.src(paths.templates.components)
    .pipe(changed('../../client/public/build/templates'))
    .pipe(templateCache('components.js', {
      module: 'app', transformUrl: function (url) {
        return 'app/' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../../client/public/build/templates'));
});

gulp.task('tempPages', [], function () {
  return gulp.src(paths.templates.pages)
    .pipe(changed('../../client/public/build/templates'))
    .pipe(templateCache('pages.js', {
      module: 'app', transformUrl: function (url) {
        return 'app/' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../../client/public/build/templates'));
});

gulp.task('tempModals', [], function () {
  return gulp.src(paths.templates.modals)
    .pipe(changed('../../client/public/build/templates'))
    .pipe(templateCache('modals.js', {
      module: 'app', transformUrl: function (url) {
        return 'app//' + url;
      }
    }))
    .pipe(ngmin())
    .pipe(gulp.dest('../../client/public/build/templates'));
});

gulp.task('templates', ['tempComponents', 'tempPages', 'tempModals'], function () {
  return gulp.src(paths.build.templates)
    .pipe(changed('../../client/public/build/js'))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('../../client/public/build/js'));
});

gulp.task('allStyles', ['libStyles', 'styles', 'sprites'], function () {
  return gulp.src(paths.build.css)
    .pipe(changed('../../client/public/build'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../../client/public/build'));
});

gulp.task('allScripts', ['libScripts', 'scripts', 'templates'], function () {
  return gulp.src(paths.build.js)
    .pipe(changed('../../client/public/build'))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(concat('all.min.js'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('../../client/public/build'));
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