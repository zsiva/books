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
            controllerAs: 'vm',
            resolve: {
                booksData: ['BookService', BookService => BookService.getAllItems()]
            }
        })
        .state(STATES.BOOK_INFO, {
            url: ROUTES.BOOK_INFO,
            template: require('./components/books/info/template.html'),
            controller: 'bookInfoController',
            controllerAs: 'vm',
            params: {
              bookSlug: ''
           },
            resolve: {
                bookData: (BookService, $stateParams) =>  BookService.getItem($stateParams.bookSlug)
            },
        })
        .state(STATES.BOOK_CREATE, {
            url: ROUTES.BOOK_CREATE,
            template: require('./components/books/create/template.html'),
            controller: 'bookCreateController',
            controllerAs: 'vm',
            resolve: {
                authors: ['AuthorService', AuthorService => AuthorService.getAllItems()]
            }
        })
        .state(STATES.AUTHORS_LIST, {
            url: ROUTES.AUTHORS,
            template: require('./components/authors/list/template.html'),
            controller: 'authorListController',
            controllerAs: 'vm',
            resolve: {
                authors: ['AuthorService', AuthorService => AuthorService.getAllItems()]
            }
        })
        .state(STATES.AUTHOR_INFO, {
            url: ROUTES.AUTHOR_INFO,
            params: {
              authorSlug: ''
            },
            template: require('./components/authors/info/template.html'),
            controller: 'authorInfoController',
            controllerAs: 'vm',
            resolve: {
                authorData: (AuthorService, $stateParams) =>  AuthorService.getItem($stateParams.authorSlug)
            }
        });
}
export default angular.module('app.routes', [])
  .config(routes);
