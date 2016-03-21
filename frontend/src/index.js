//require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');
require('angular-slugify');

import angular from 'angular';

import services from './services/services';
import routes from './routes';
import directives from './components/directives';

const app = angular.module('books', [
    'ui.router',
    'ui.bootstrap',
    'slugifier',
    services.name,
    routes.name,
    directives.name,
    require('./components/books/list').name,
    require('./components/books/info').name,
    require('./components/books/create').name,
    require('./components/authors/list').name,
    require('./components/navigation').name,
    require('./components/authors/authorsSelect').name,
    require('./components/authors/info').name,
    require('./services/modal-service').name,
    require('./components/shared/rating').name
]);
