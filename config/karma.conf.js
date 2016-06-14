module.exports = function(config) {
  config.set({

    basePath: '..',

    frameworks: ['jquery-1.8.2', 'jasmine-jquery', 'jasmine'],

    browsers: ['PhantomJS'],

    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    singleRun: true,

    coffeePreprocessor: {
      options: {
        bare: true,
        sourceMap: false
      },
      transformPath: function(path) {
        return path.replace(/\.coffee$/, '.js')
      }
    },

    files: [
      'src/iosbadge/**/*.coffee',
      'src/test/**/*.coffee'
    ]
  })
}
