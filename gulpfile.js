var gulp=require('gulp');
var scss=require('gulp-sass');
var watch=require('gulp-watch');
var jshint=require('gulp-jshint');
//var rename=require('gulp-rename');


gulp.task('scss',function(){
	gulp.src('./css/*.scss')
		.pipe(scss({outputStyle:'expanded'}).on('error',scss.logError))
		.pipe(gulp.dest('./css'))
})

gulp.task('watch',function(){
	var watched=gulp.watch(['./css/*scss']);
	watched.on('change',function(e){
		console.log("类型"+e.type);
		gulp.run('scss');
	})
})

gulp.task('default',function(){
	gulp.run('scss');
})
