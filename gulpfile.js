var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');

gulp.task('clean', function () {
  return del('dist')
});

// gulp.task('build:server', function () {
// 	var tsProject = ts.createProject('server/tsconfig.json');
//     var tsResult = gulp.src('server/**/*.ts')
// 		.pipe(sourcemaps.init())
//         .pipe(ts(tsProject))
// 	return tsResult.js
//         .pipe(concat('server.js'))
//         .pipe(sourcemaps.write()) 
// 		.pipe(gulp.dest('dist'))
// });


// CLIENT


var cssNPMDependencies = [
  'ng2-material/dist/ng2-material.css',
  'ng2-material/dist/font.css'
];
/*
 jsNPMDependencies, sometimes order matters here! so becareful!
 */
var jsNPMDependencies = [
  'angular2/bundles/angular2-polyfills.js',
  'systemjs/dist/system.src.js',
  'rxjs/bundles/Rx.js',
  'angular2/bundles/angular2.dev.js',
  'angular2/bundles/router.dev.js',
  'ng2-material/**/*'
];

gulp.task('build:index', function () {
  var mappedJsPaths = jsNPMDependencies.map(file => {
    return path.resolve('node_modules', file)
  });

  //Let's copy our head JS dependencies into a dist/libs
  var copyJsNPMDependencies = gulp.src(mappedJsPaths, {base: 'node_modules'})
    .pipe(gulp.dest('dist/libs'));

  var mappedCssPaths = cssNPMDependencies.map(file => {
    return path.resolve('node_modules', file)
  });

  //Let's copy our head CSS dependencies into a dist/libs
  var copyCssNPMDependencies = gulp.src(mappedCssPaths, {base: 'node_modules'})
    .pipe(gulp.dest('dist/libs'));

  //Let's copy our app.css into dist
  var copyAppCss = gulp.src('client/app/css/app.css')
    .pipe(gulp.dest('dist/app/css'));

  //Let's copy our index into dist
  var copyIndex = gulp.src('client/index.html')
    .pipe(gulp.dest('dist'));
  return [copyCssNPMDependencies, copyJsNPMDependencies, copyIndex, copyAppCss];
});

gulp.task('build:app', function () {
  var tsProject = ts.createProject('client/tsconfig.json');
  var tsResult = gulp.src('client/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));
  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});


gulp.task('build', function (callback) {
  runSequence('clean', 'build:index', 'build:app', callback);
});

gulp.task('watch', function () {

  // Watch .css files
  gulp.watch('client/**/*.css', ['build']);

  // Watch .js files
  gulp.watch('client/**/*.ts', ['build']);

  // Watch html files
  gulp.watch('client/**/*.html', ['build']);

  // Watch json files
  gulp.watch('client/**/*.json', ['build']);

});

gulp.task('build-watch', function (callback) {
  runSequence('build', 'watch', callback);
});

gulp.task('default', ['build-watch']);

