import ROUTES from './constants/routes';
import STATES from './constants/states';

/*@ngInject*/
function routes ($stateProvider, $locationProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise(ROUTES.BOOKS);
    
    $stateProvider
        .state(STATES.BOOKS_LIST, {
            url: ROUTES.BOOKS,
            template: require('./components/books/list/template.html'),
            controller: 'bookListController',
            controllerAs: 'vm'
        })
        .state(STATES.BOOK_INFO, {
            url: ROUTES.BOOK_INFO,
            template: require('./components/books/info/template.html'),
            controller: 'bookInfoController',
            controllerAs: 'vm',
            params: {
              bookSlug: '',
              bookId: ''
            },
            resolve: {
                bookData: function ($http, $stateParams) {
                    return $http.get('/api/books/' + $stateParams.bookSlug).then( function (res) {
                        return res.data[0];
                    });
                },
                authors: function ($http, authorService) {
                    return $http.get('/api/authors').then( function (res) {
                        authorService.initAuthors(res.data);
                    });
                }
            }
        })
        .state(STATES.BOOK_CREATE, {
            url: ROUTES.BOOK_CREATE,
            template: require('./components/books/create/template.html'),
            controller: 'bookCreateController',
            controllerAs: 'vm'
        })
        .state(STATES.AUTHORS_LIST, {
            url: ROUTES.AUTHORS,
            template: require('./components/authors/list/template.html'),
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
        .state(STATES.AUTHOR_INFO, {
            url: ROUTES.AUTHOR_INFO,
            params: {
              authorSlug: '',
              authorId: ''
            },
            template: require('./components/authors/info/template.html'),
            controller: 'authorInfoController',
            controllerAs: 'vm',
            resolve: {
                authorData: function ($http, $stateParams) {
                    return $http.get('/api/authors/' + $stateParams.authorId).then( function (res) {
                      return res.data;
                    });
                }
            }
        });
}
export default angular.module('app.routes', [])
  .config(routes);
