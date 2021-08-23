const gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    scss = require('gulp-sass')(require('sass')),
    fileInclude = require('gulp-file-include'),
    webpack = require('webpack-stream'),
    WEBPACK_CONFIG = require('./webpack.config');

const projectFolder = "dist";
const sources = "src";

const path = {
    build: {
        view: projectFolder + "/",
        style: projectFolder + "/css/",
        js: projectFolder + "/js/",
        img: projectFolder + "/img/",
        icons: projectFolder + "/icons/",
        fonts: projectFolder + "/fonts/"
    },
    src: {
        view: [sources + "/*.html", sources + "/pages-*/*.html"],
        style: sources + "/scss/*.scss",
        js: sources + "/js/*.js",
        img: sources + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        icons: sources + "/icons/**/*",
        fonts: sources + "/fonts/**/*.{ttf,woff,woff2}"
    },
    watch: {
        view: sources + "/**/*.html",
        style: sources + "/scss/**/*.scss",
        js: sources + "/js/**/*.js",
        img: sources + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        icons: sources + "/icons/**/*"
    },
    clean: "./" + projectFolder + "/"
};

function synchronizeBrowser() {
    browserSync.init({
        server: {
            baseDir: "./" + projectFolder + "/"
        },
        port: 3000,
        notify: false
    });
}

function view() {
    return gulp.src(path.src.view)
        .pipe(fileInclude())
        .pipe(gulp.dest(path.build.view))
        .pipe(browserSync.stream());
}

function style() {
    return gulp.src(path.src.style)
        .pipe(scss({
            outputStyle: "expanded"
        }))
        .pipe(gulp.dest(path.build.style))
        .pipe(browserSync.stream());
}

function js() {
    return gulp.src(path.src.js)
        .pipe(webpack(WEBPACK_CONFIG))
        .pipe(gulp.dest(path.build.js))
        .pipe(browserSync.stream());
}

function img() {
    return gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(browserSync.stream());
}

function icons() {
    return gulp.src(path.src.icons)
        .pipe(gulp.dest(path.build.icons))
        .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
}

function watchFiles() {
    gulp.watch([path.watch.view], view);
    gulp.watch([path.watch.style], style);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], img);
    gulp.watch([path.watch.icons], icons);
}

const build = gulp.series(gulp.parallel(view, style, js), img, icons, fonts);
const watch = gulp.parallel(build, watchFiles, synchronizeBrowser);

exports.js = js;
exports.style = style;
exports.view = view;
exports.build = build;
exports.watch = watch;
exports.default = watch;