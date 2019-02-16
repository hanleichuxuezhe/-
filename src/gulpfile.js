var gulp = require("gulp");
var sass = require("gulp-sass");//编译sass
//编译sass
gulp.task("sass", function () {
    return gulp.src("./scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
})
//监听sass
gulp.task("watch",function(){
    return gulp.watch("./scss/*.scss",gulp.series("sass"))
})
gulp.task("dev",gulp.series("watch"))