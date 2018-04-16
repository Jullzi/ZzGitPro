import gulp from 'gulp';
import gulpif from 'gulp-if';
import livereload from 'gulp-livereload';
import less from 'gulp-less';
import args from './util/args';

gulp.task('less',()=>{
  return gulp.src('app/css/less/**.less')
  .pipe(less())
  .pipe(gulp.dest('app/css/'))
  .pipe(gulpif(args.watch,livereload()))
})
