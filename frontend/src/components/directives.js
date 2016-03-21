import DeleteItemButton from './shared/deleteItemButton';
import TableList from './shared/tableList';
import StarRating from './shared/rating';

var moduleName = 'books.directives';

module.exports = angular.module(moduleName, [])
    .directive('deleteItemButton', () => new DeleteItemButton)
    .directive('tableList', () => new TableList)
    .directive('starRating', () => new StarRating);

export default moduleName;
