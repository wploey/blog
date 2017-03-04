var gulp = require('gulp');
var elixir = require('laravel-elixir');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    return gulp.src('resources/views/sb2/less/sb-admin-2.less')
        .pipe(less())
        .pipe(gulp.dest('public/dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('public/dist/css/sb-admin-2.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/dist/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy JS to dist
gulp.task('js', function() {
    return gulp.src(['resources/views/sb2/js/sb-admin-2.js'])
        .pipe(gulp.dest('public/dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
})

// Minify JS
gulp.task('minify-js', ['js'], function() {
    return gulp.src('resources/views/sb2/js/sb-admin-2.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Copy vendor libraries from /resources/views/vendor into /vendor
gulp.task('copy', function() {
    gulp.src(['resources/views/vendor/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('public/vendor/bootstrap'))

    gulp.src(['resources/views/vendor/bootstrap-social/*.css', 'resources/views/vendor/bootstrap-social/*.less', 'resources/views/vendor/bootstrap-social/*.scss'])
        .pipe(gulp.dest('public/vendor/bootstrap-social'))

    gulp.src(['resources/views/vendor/datatables/media/**/*'])
        .pipe(gulp.dest('public/vendor/datatables'))

    gulp.src(['resources/views/vendor/datatables-plugins/integration/bootstrap/3/*'])
        .pipe(gulp.dest('public/vendor/datatables-plugins'))

    gulp.src(['resources/views/vendor/datatables-responsive/css/*', 'resources/views/vendor/datatables-responsive/js/*'])
        .pipe(gulp.dest('public/vendor/datatables-responsive'))

    gulp.src(['resources/views/vendor/flot/*.js'])
        .pipe(gulp.dest('public/vendor/flot'))

    gulp.src(['resources/views/vendor/flot.tooltip/js/*.js'])
        .pipe(gulp.dest('public/vendor/flot-tooltip'))

    gulp.src(['resources/views/vendor/font-awesome/**/*', '!resources/views/vendor/font-awesome/*.json', '!resources/views/vendor/font-awesome/.*'])
        .pipe(gulp.dest('public/vendor/font-awesome'))

    gulp.src(['resources/views/vendor/jquery/dist/jquery.js', 'resources/views/vendor/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('public/vendor/jquery'))

    gulp.src(['resources/views/vendor/metisMenu/dist/*'])
        .pipe(gulp.dest('public/vendor/metisMenu'))

    gulp.src(['resources/views/vendor/morrisjs/*.js', 'resources/views/vendor/morrisjs/*.css', '!resources/views/vendor/morrisjs/Gruntfile.js'])
        .pipe(gulp.dest('public/vendor/morrisjs'))

    gulp.src(['resources/views/vendor/raphael/raphael.js', 'resources/views/vendor/raphael/raphael.min.js'])
        .pipe(gulp.dest('public/vendor/raphael'))

})

// Run everything
gulp.task('run', ['minify-css', 'minify-js', 'copy']);

// // Configure the browserSync task
// gulp.task('browserSync', function() {
//     browserSync.init({
//         server: {
//             baseDir: ''
//         },
//     })
// })

// // Dev task with browserSync
// gulp.task('dev', ['browserSync', 'less', 'minify-css', 'js', 'minify-js'], function() {
//     gulp.watch('resources/views/sb2/less/*.less', ['less']);
//     gulp.watch('public/dist/css/*.css', ['minify-css']);
//     gulp.watch('resources/views/sb2/js/*.js', ['minify-js']);
//     // Reloads the browser whenever HTML or JS files change
//     //gulp.watch('pages/*.html', browserSync.reload);
//     //gulp.watch('dist/js/*.js', browserSync.reload);
// });

/**
 * Default gulp is to run this elixir stuff
 */
elixir(function(mix) {

    // 合并 scripts
    mix.scripts(['vendor/jquery/jquery.min.js','vendor/bootstrap/js/bootstrap.min.js', 'vendor/metisMenu/metisMenu.min.js', 'dist/js/sb-admin-2.min.js'],
        'public/assets/js/app.js',
        'public'
    );
});

// Minify JS
gulp.task('runjs', ['js'], function() {
    return gulp.src('public/assets/js/app.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('public/assets/js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
