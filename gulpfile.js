'use strict';

const autoprefixer = require('gulp-autoprefixer');
const babel   = require('gulp-babel');
const concat  = require('gulp-concat');
const connect = require('gulp-connect');
const gulp    = require('gulp');
const path    = require('path');
const rename  = require('gulp-rename');
const sass    = require('gulp-sass');
const Server  = require('karma').Server;
const uglify  = require('gulp-uglify');

gulp.task('test', () => {
	new Server({
		configFile: __dirname + '/karma.conf.js',
		
	}).start();
});

gulp.task('connect', () => {
    connect.server({
		root: 'dist',
		livereload: true
	})
});

gulp.task('js', () =>
	gulp.src(['src/js/*.js'])
		.pipe(babel({
            presets: ['latest']
        }))
		.pipe(concat('app.js'))
		.pipe(uglify())    
		.pipe(gulp.dest('dist/js'))
		.pipe(connect.reload())
);

gulp.task('sass', () =>
    gulp.src('./src/sass/**/*.scss')
		.pipe(autoprefixer())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(rename('style.css'))
        .pipe(gulp.dest('./dist/css'))
);

gulp.task('html', () =>
	gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
		.pipe(connect.reload())
);

gulp.task('json', () => 
	gulp.src('src/data/mock.js')
		.pipe(gulp.dest('dist/data'))
		.pipe(connect.reload())
)

gulp.task('watch', () => {
    gulp.watch(['src/*.html'], ['html']);
	gulp.watch(['src/sass/**/*.scss'], ['sass']);
	gulp.watch(['src/js/*.js'], ['js']);
	gulp.watch(['src/data/*.js'], ['json']);
});

gulp.task('default', ['js', 'html', 'sass', 'json', 'connect', 'watch']);

gulp.task('build', ['js', 'html', 'sass', 'json']);