var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

//compile sass
gulp.task('sass',function(){
    return gulp.src(['src/assets/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest("src/assets"))
});

//compile pug
gulp.task('views', function buildHTML() {
  return gulp.src('src/**/*.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(function (file) {
      return file.base;
    }));
});

gulp.task('serve', ['sass', 'views'], function(){
   

  gulp.watch(["src/assets/scss/*.scss"], ['sass']);
  gulp.watch(["src/app/**/*.pug"], ['views']);
});

gulp.task('default', ['serve']);