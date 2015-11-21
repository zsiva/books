require('angular');
require('angular-ui-router');

import {BOOKS} from './constants/routes';
import STATES from './constants/states';

const app = angular.module('books', [
    'ui.router'
]);
app.config(setUpRoutes);

function setUpRoutes ($stateProvider, $locationProvider) {
    console.log('jsdhfkadsf')
    //$locationProvider.html5Mode(true);
    $stateProvider
        .state(STATES.BOOKS_LIST, {
            url: BOOKS,
            template: require('./components/booksList/template.html')
        })
        .state('index', {
            url: '/',
            template: 'Hello'
        })
}
