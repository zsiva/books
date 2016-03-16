var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'jasmine' ],
    files: [
        'node_modules/angular/angular.js',
        'node_modules/angular-mocks/angular-mocks.js',
        'src/services/modal-service.js',
        'tests/services/modal-service.spec.js'
    ],
    preprocessors: {
        'src/services/modal-service.js': ['webpack', 'sourcemap'],
        'tests/services/modal-service.spec.js': ['webpack', 'sourcemap']
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
          loaders: [
              {
                  test: /\.js?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel?presets[]=es2015' // 'babel-loader' is also a legal name to reference
              },
              {
                  test: /\.html$/,
                  loader: 'html'
              }
          ]
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};
