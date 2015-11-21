require('angular');
require('angular-ui-router');

import ROUTES from './constants/routes';
import STATES from './constants/states';

const app = angular.module('books', [
    'ui.router',
    require('./services/book-service').name,
    require('./components/booksList').name
]);
app.config(setUpRoutes);

function setUpRoutes ($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $stateProvider
        .state(STATES.BOOKS_LIST, {
            url: ROUTES.BOOKS,
            template: require('./components/booksList/template.html'),
            controller: 'bookListController',
            controllerAs: 'vm',
            resolve: {
                books: function ($http, bookService) {
                    return $http.get('/api/books').then( function (res) {
                        console.log(res);
                        bookService.initBooks(res.data);
                    });
                }
            }
        })
        .state('index', {
            url: '/',
            template: 'Hello'
        })
}
