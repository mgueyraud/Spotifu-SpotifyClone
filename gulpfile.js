//Gulp configuration file for the scaffolding and minimize files for react

const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create(); //For the scaffolding

const paths = {
    SASS: {
        src: "./scaffolding/sass/**/*.scss",
        dest: "./scaffolding/assets/css"
    },
    JS: {
        src: "./scaffolding/js/**/*.js",
        dest: "./scaffolding/assets/js"
    },
    //For the scaffolding
    HTML: {
        src: "./scaffolding/**/*.html"
    }
};

const compileJS = () => {
    return src(paths.JS.src)
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(dest(paths.JS.dest))
        .pipe(browserSync.stream());
};

const compileSass = () => {
    return src(paths.SASS.src)
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(autoprefixer({
            versions: [
                "last 5 browsers"
            ]
        }))
        .pipe(dest(paths.SASS.dest))
        .pipe(browserSync.stream());
};


const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: "./scaffolding/"
        }
    })
    watch(paths.SASS.src, compileSass);
    watch(paths.JS.src, compileJS);
    watch(paths.HTML.src).on("change", browserSync.reload)
};

exports.default = series(compileSass, compileJS);
exports.watch = watchFiles;
