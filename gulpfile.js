
//导入工具包 require('node_modules里对应模块')
var gulp = require('gulp'), //本地安装gulp所用到的地方
    less = require('gulp-less');

//定义一个testLess任务（自定义任务名称）
gulp.task('testLess', function () {
    //编译src/less目录下的所有less文件（**匹配src/less下的0个或多个子文件夹）
    gulp.src(['src/less/**/*.less', '!src/less/**/{reset,test}.less']) //该任务针对的文件,多个文件以数组形式传入,除了reset.less和test.less
        .pipe(less()) //该任务调用的模块
        .pipe(gulp.dest('src/css')); //将会在src/css下生成index.css以及detail.css
});

gulp.task('default',['testLess']); //定义默认任务

//gulp.task('default', function() {
//    // 将你的默认的任务代码放在这
//});

//gulp.task(name[, deps], fn) 定义任务  name：任务名称 deps：依赖任务名称 fn：回调函数
//gulp.src(globs[, options]) 执行任务处理的文件  globs：处理的文件路径(字符串或者字符串数组)
//gulp.dest(path[, options]) 处理完后文件生成路径