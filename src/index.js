require('angular');
require('angular-ui-router');

const ROUTES = require('./constants/routes');
const STATES = require('./constants/states');

modules.exports = angular.module('books', [
    'ui-router'
])
