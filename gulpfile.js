'use strict'

const path    = require('path')
const gulp    = require('gulp')
const less    = require('gulp-less')
const babel   = require('gulp-babel')
const concat  = require('gulp-concat')
const connect = require('gulp-connect')
const rename  = require('gulp-rename')

gulp.task('connect', () => {
    connect.server({
		root: 'build',
		livereload: true
	})
})

gulp.task('js', () =>
	gulp.src(['src/js/*.js', 'src/js/**/*.js'])
		.pipe(babel({
            presets: ['latest']
        }))
		.pipe(concat('app.js'))        
		.pipe(gulp.dest('build/js'))
		.pipe(connect.reload())
)

gulp.task('less', () => {
    return gulp.src('src/less/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('build/css/'))
        .pipe(connect.reload())
})

gulp.task('html', () =>
	gulp.src('src/index.html')
		.pipe(gulp.dest('build'))
		.pipe(connect.reload())
)

gulp.task('json', () => 
	gulp.src('src/data/brokers.json')
		.pipe(gulp.dest('build/data'))
		.pipe(connect.reload())
)

gulp.task('watch', () => {
	gulp.watch(['src/*.html'], ['html']);
	gulp.watch(['src/less/*.less'], ['less']);
	gulp.watch(['src/js/*.js'], ['js']);
	gulp.watch(['src/data/brokers.json'], ['json']);
})

gulp.task('default', ['js', 'less', 'html', 'json', 'connect', 'watch']);
