module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            'node_modules/axios/dist/axios.min.js',
            './src/js/lib/card-validator.min.js',
            './src/js/loader.js',
            './spec/*.spec.js'
        ],
        reporters: ['spec', 'coverage'],
        specReporter: {
            maxLogLines: 5,
            suppressErrorSummary: true,
            suppressFailed: false,
            suppressPassed: false,
            suppressSkipped: true,
            showSpecTiming: false
        },
        preprocessors: {
            './src/js/loader.js': ['babel', 'coverage'],
            // './src/js/main.js': ['babel', 'coverage'],
            './spec/*.spec.js': ['babel', 'coverage']
        },
        coverageReporter: {
            type : 'text',
            dir : 'coverage/'
        },
        browsers: ['PhantomJS'/*, 'Chrome'*/],
        singleRun: true//,
        // logLevel: config.LOG_DEBUG
    });
};