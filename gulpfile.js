const gulp = require('gulp');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const gcmq = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const notify = require('gulp-notify');
const del = require('del');
const rigger = require('gulp-rigger');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const browserSync = require('browser-sync').create();
const tildeImporter = require('node-sass-tilde-importer');


const paths = {
    root: './project/dist',
    html: {
        pages: './project/src/assets/html/*.html',
        src: './project/src/assets/html/**/*',
        dest: './project/dist/'
    },
    styles: {
        main: './project/src/assets/styles/main.sass',
        src: './project/src/assets/styles/**/*',
        dest: './project/dist/assets/styles/'
    },
    scripts: {
        src: './project/src/assets/scripts/*.js',
        dest: './project/dist/assets/scripts/'
    },
    resources: {
        src: './project/src/resources/**/*',
        dest: './project/dist/assets/'
    }
};

function server() {
    browserSync.init({
        server: {
            baseDir: paths.root
        },
        notify: false,
        // open: false,
        // tunnel: true,
        // tunnel: "./projectmane", //Demonstration page: http://./projectmane.localtunnel.me
    })
}

function watch() {
    gulp.watch(paths.html.src, html);
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.resources.src, resources);
}

function resources() {
    return gulp.src(paths.resources.src)
        .pipe(gulp.dest(paths.resources.dest));
}

function html() {
    return gulp.src(paths.html.pages)
        .pipe(rigger())
        .pipe(gulp.dest(paths.html.dest))
        // .on('error', gutil.log)
        .pipe(browserSync.reload({ stream: true }))
}

function styles() {
    return gulp.src(paths.styles.main)
        .pipe(sassGlob())
        .pipe(sass({
            importer: tildeImporter,
            outputStyle: 'expand'
        }).on('error', notify.onError()))
        .pipe(rename({ suffix: '.min', prefix: '' }))
        .pipe(gcmq())
        .pipe(cleanCSS( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browserSync.reload({ stream: true }))
}

function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browserSync.reload({ stream: true }))
}

function clean() {
    return del(paths.root)
}

exports.resources = resources;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;

gulp.task('default',
    gulp.series(
        clean,
        gulp.parallel(html, resources, styles, scripts),
        gulp.parallel(watch, server)
    )
);