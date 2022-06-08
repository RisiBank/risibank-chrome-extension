const gulp = require("gulp");
const webpack = require('webpack-stream');


const webpackConfig = require(`./webpack.config.js`);

gulp.task('dist-move-assets', () => {

    return gulp
        .src([
            './LICENSE',
            './manifest.json',
            './*.png',
            './*.html',
        ])
        .pipe(gulp.dest(__dirname + '/dist/extension'));
});

gulp.task('dist-webpack', () => {

    return gulp
        .src(['./src/background.js', './src/activate.js'])
        .pipe(webpack(webpackConfig))
            .on('error',function (err) {
                console.error('WEBPACK ERROR', err);
                this.emit('end'); // Don't stop the rest of the task
            })
        .pipe(gulp.dest(__dirname + '/dist/extension'));
});


// [DEFAULT]
gulp.task('default', gulp.series('dist-move-assets', 'dist-webpack'));
