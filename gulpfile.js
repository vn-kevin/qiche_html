/**
 * gulp配置文件
 * 注意事项：各项目的task的任务名称不要相同，以免冲突执行，如加上项目前缀 base_jsmin
 * */

/*var minJs = require('gulp-uglify');
var minCss = require("gulp-minify-css");
var cssver = require('gulp-make-css-url-version');
//var minHtml = require("gulp-minify-html");
var replace = require("gulp-replace");*/


/**
 * ======================================华丽的分割线==========================================
 *   压缩html 不压缩html了，压缩插件对压缩模板代码有些问题
 * ======================================华丽的分割线==========================================
 * */


var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var minifyHTML = require('gulp-htmlmin');
var replace = require("gulp-replace");


gulp.task('copy',function(cb){
    gulp.src(['src/{images,img,json}/*.*'])
    	.pipe(gulp.dest('docs'))
});

gulp.task('copy_html',function(cb){
    gulp.src(['*.html'])
    	.pipe(replace('src/', ''))
    	//.pipe(minifyHTML({collapseWhitespace: true}))
    	.pipe(gulp.dest('docs'))
});

gulp.task('jsmin', function (cb) {
  pump([
        gulp.src(['src/js/*.js']),
        replace('src/', ''),
        //uglify(),
        gulp.dest('docs/js/')
    ],
    cb
  );
});

gulp.task('cssmin', function (cb) {
  pump([
        gulp.src(['src/css/*.css']),
        gulp.dest('docs/css/')
    ],
    cb
  );
});

gulp.task('all',['copy','copy_html','jsmin','cssmin'],function(cb){

});