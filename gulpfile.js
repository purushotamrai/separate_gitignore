var gulp = require('gulp');

var sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');

gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(cleanCSS())
    .pipe(gulp.dest('app/css'))
});
