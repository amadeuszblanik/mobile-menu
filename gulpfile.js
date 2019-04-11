const gulp = require("gulp"),
      sass = require("gulp-sass"),
      concat = require('gulp-concat');



function styles(){
    return(
        gulp.src("src/sass/index.scss")
            .pipe(sass({
                outputStyle: "compressed"
            }))
            .on("error", sass.logError)
            .pipe(gulp.dest('dist/'))
    )
}

exports.styles = styles;


function scripts(){
    return(
        gulp.src("src/js/index.js")
            .pipe(concat('index.js'))
            .pipe(gulp.dest('dist/'))
    )
}

exports.scripts = scripts;

function watch(){
    gulp.watch('src/sass/**/*.scss', styles)
    gulp.watch('src/js/**/*.js', scripts)
}

exports.default = watch