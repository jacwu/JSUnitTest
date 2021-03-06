// Karma configuration
// Generated on Tue May 10 2016 14:19:01 GMT+0800 (China Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [ 
      'bower_components/angular/angular.js',
      'bower_components/angular-mocks/angular-mocks.js',  
      'bower_components/jquery/dist/jquery.js', 
      'bower_components/jasmine-ajax/lib/mock-ajax.js',
      'bower_components/jasmine-jquery/lib/jasmine-jquery.js', 
      'Source/**/*.js',
      'Spec/**/*.js',
      {
          pattern: 'Spec/**/*.html',
          watched: true,
          included: false,
          served: true
      }
      
    ],


    // list of files to exclude
    exclude: [
      '*.bmp'
    ],
    
    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'Source/**/*.js': ['coverage']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'html', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    
    junitReporter: {
            outputDir: './report_output/junit'            
    },
    
    htmlReporter:{
        outputDir: './report_output/html'
    },
    
    coverageReporter:{
        type: 'html',
        dir: './report_output/coverage'
    }
  })
}
