import gulp from 'gulp';
import gulpif from 'gulp-uglify';
import livereload from 'gulp-livereload';
import args from './util/args';

gulp.task('images',()=>{
  return gulp.src('app/**/*')
  .pipe(gulp.dest('server/public'))
  // .pipe(gulpif(args.watch,livereload()))
})
