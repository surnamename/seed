module.exports = function(config) {
  config.set({
    basePath: '../',

    port: 9876,
    colors: true,
    autoWatch: true,
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'], // 'Chrome', 'Firefox'

    files: [
      '../public/build/js/libs.min.js',
      'lib/angular/1.5.2/angular-mocks.js',
      '../public/build/js/scripts.min.js',
      'test/unit/**/*.js'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },

    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    //plugins: ['karma-chrome-launcher', 'karma-firefox-launcher', 'karma-jasmine'],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Continuous Integration mode. if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level how many browser should be started simultaneous
    concurrency: Infinity
  })
};