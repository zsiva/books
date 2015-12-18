require('angular');
require('angular-ui-router');
require('angular-ui-bootstrap');

import ROUTES from './constants/routes';
import STATES from './constants/states';

const app = angular.module('books', [
    'ui.router',
    'ui.bootstrap',
    require('./services/book-service').name,
    require('./components/booksList').name,
    require('./components/authorsList').name,
    require('./services/author-service').name,
    require('./components/navigation').name,
    require('./services/modal-service').name
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
                        bookService.initBooks(res.data);
                    });
                }
            }
        })
        .state(STATES.AUTHORS_LIST, {
            url: ROUTES.AUTHORS,
            template: require('./components/authorsList/template.html'),
            controller: 'authorListController',
            controllerAs: 'vm',
            resolve: {
                authors: function ($http, authorService) {
                    return $http.get('/api/authors').then( function (res) {
                        authorService.initAuthors(res.data);
                    });
                }
            }
        })
        .state('index', {
            url: '/',
            template: 'Hello'
        });
}
