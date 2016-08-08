const gulp = require('gulp')
const bundler = require('gulp-jsonschema-bundle')
const format = require('gulp-json-format')
const mocha = require('gulp-mocha')

gulp.task('schemas', () => {
  gulp.src('./schemas/**/*.json')
    .pipe(gulp.dest('build/'))
})

gulp.task('bundle', () => {
  return gulp.src('./schemas/bundle.json')
    .pipe(bundler())
    .pipe(format(2))
    .pipe(gulp.dest('build/'))
})

gulp.task('entry', () => {
  return gulp.src('./schemas/schemas.js')
    .pipe(gulp.dest('build/'))
})

gulp.task('test', () => {
  return gulp.src('schemas/**/*.spec.js')
    .pipe(mocha())
})

gulp.task('build', ['schemas', 'bundle', 'entry'])
gulp.task('default', ['build'])
