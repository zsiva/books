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
    reporters: [ 'dots' ],
    webpack: {
      devtool: 'inline-source-map',
      module: {
          loaders: [
              {
                  test: /\.js?$/,
                  exclude: /(node_modules|bower_components)/,
                  loader: 'babel?presets[]=es2015'
              },
              {
                  test: /\.html$/,
                  loader: 'html'
              }
          ]
      }
    },
    webpackServer: {
      noInfo: true
    }
  });
};
