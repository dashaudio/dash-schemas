const gulp = require('gulp')
const bundler = require('gulp-jsonschema-bundle')
const format = require('gulp-json-format')
const mocha = require('gulp-mocha')

gulp.task('schema', () => {
  gulp.src('./schema/*.json')
    .pipe(gulp.dest('build/'))
})

gulp.task('bundle', () => {
  return gulp.src('./schema/bundle.json')
    .pipe(bundler())
    .pipe(format(2))
    .pipe(gulp.dest('build/'))
})

gulp.task('test', () => {
  return gulp.src('test/*.spec.js')
    .pipe(mocha())
})

gulp.task('default', ['schema', 'bundle', 'test'])
