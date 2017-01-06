var glob = require("glob")
var gulp = require('gulp');
var eventStream = require('event-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

function compileScript(entry, outputDir){
    var config = {
        entries: [entry],
        insertGlobals: false,
        debug: true,
        paths: ['./'],

        //for watchify
        cache: {},
        packageCache: {},
        fullPaths: true,
        plugin: [watchify],
    };

    var browserifyInstance = browserify(config);
    
    function bundleEntry(){
        var timer = 'bundle entry: ' + entry;
        console.time(timer);
        var stream = browserifyInstance.bundle(function(err, content) {
            if (err) {
                console.error('failed to bundle ' + entry , err);
            }
        })
        .pipe(source(entry))
        .pipe(buffer())
        .pipe(gulp.dest(outputDir));

        stream.on('end', function(){
            console.timeEnd(timer);
        });

        return stream;
    }

    browserifyInstance.on('update', function(){
        bundleEntry();
    });
    
    return bundleEntry();
}

gulp.task('appjs', function(done) {
    var entries = glob.sync('./tests/input/entry*.js');
    var tasks = entries.map(function(entry){
        return compileScript(entry, './tests/output/browserified');
    });
    eventStream.merge(tasks).on('end', done);
});

gulp.task('default', gulp.series('appjs'));