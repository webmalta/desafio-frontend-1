//mods
var gulp        = require('gulp');
var browserSync = require('browser-sync');
var watch 		= require('gulp-watch');
//var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

//task sass
    gulp.task('sass', function () {
        return gulp.src('sass/*.scss')
            //.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sass().on('error', sass.logError))
            .pipe(minifyCss({ keepSpecialComments: 1 }))
            .pipe(rename({ extname: '.min.css' }))
            .pipe(gulp.dest('css'));
    });

//task server	
	gulp.task('browser-sync', function(){
		browserSync.init(["*.html", "css/*.css", "js/*.js"], {
            server: {
                baseDir: "./"
            }
        });
    });
        
//task default
    gulp.task('default', ['sass', 'browser-sync'], function () {  
        gulp.watch("sass/*.scss", ['sass']);
    });