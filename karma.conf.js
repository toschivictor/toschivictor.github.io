module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            './spec/index.mock.js',
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
            './spec/index.mock.js': ['babel', 'coverage'],
            './spec/*.spec.js': ['babel', 'coverage']
        },
        coverageReporter: {
            type : 'text',
            dir : 'coverage/'
        },
        browsers: ['PhantomJS'],
        singleRun: true//,
        // logLevel: config.LOG_DEBUG
    });
};