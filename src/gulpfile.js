var gulp = require("gulp");
var sass = require("gulp-sass"); //编译sass
var server = require("gulp-webserver"); //服务
var concat = require("gulp-concat"); //合并文件

var minHtml = require("gulp-htmlmin"); //压缩html
var minImg = require("gulp-imagemin") //压缩图片
var minJs = require("gulp-uglify"); //压缩js
var babel = require("gulp-babel"); //es6 -->es5
var minCss = require("gulp-clean-css"); //压缩css

var path = require("path");
var url = require("url");
var fs = require("fs");
//起服务
gulp.task("server", function () {
    return gulp.src("./")
        .pipe(server({
            port: 8090,
            open: true,
            livereload: true,
            middleware(req, res, next) {
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === "/" ? "index.html" : pathname;
                if (pathname === "/favicon.ico") {
                    res.end(fs.readFileSync("./images/favicon.ico"))
                } else {
                    res.end(fs.readFileSync(path.join(__dirname, pathname)))
                }
            }
        }))
});

//编译sass
gulp.task("sass", function () {
    return gulp.src("./scss/style.scss")
        .pipe(sass())
        .pipe(gulp.dest("./css/"))
});
//编译js
gulp.task("Js", function () {
    return gulp.src(["./js/*.js", "!./js/all.js"])
        .pipe(babel({
            presets: "es2015"
        }))
        .pipe(gulp.dest("./js/"))
});
//监听sass
gulp.task("watch", function () {
    gulp.watch("./scss/*.scss", gulp.series("sass"));
    return gulp.watch(["./js/*.js", "!./js/all.js"], gulp.series("Js"));
});
gulp.task("dev", gulp.parallel("server", "watch"));

//压缩css
gulp.task("minCss", function () {
    return gulp.src("./css/*.css")
        .pipe(minCss())
        .pipe(gulp.dest("../dist/css/"))
});
//压缩图片
gulp.task("minImg", function () {
    return gulp.src("./images/*.{jpg,png,gif,ico}")
        .pipe(minImg({
            optimizationLevel: 5,
        }))
        .pipe(gulp.dest("../dist/images/"))
});
//压缩html
gulp.task("minHtml", function () {
    return gulp.src("./index.html")
        .pipe(minHtml({
            removeComments: true,
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest("../dist/"))
});
// //合并js
// gulp.task("concatJs", function () {
//     return gulp.src("./js/*.js")

//         .pipe(gulp.dest("./js/"))
// });
//合并压缩js
gulp.task("minJs", function () {
    return gulp.src("./js/*.js")
        .pipe(concat("all.js"))
        .pipe(minJs())
        .pipe(gulp.dest("../dist/js/"))
});
//copy
gulp.task("copy", function () {
    return gulp.src("./font/*")
        .pipe(gulp.dest("../dist/font/"))
})
gulp.task("devl", gulp.parallel("minJs", "minHtml", "minImg", "minCss"))