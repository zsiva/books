import DeleteItemButton from './shared/deleteItemButton';
import TableList from './shared/tableList';

var moduleName = 'books.directives';

module.exports = angular.module(moduleName, [])
    .directive('deleteItemButton', () => new DeleteItemButton)
    .directive('tableList', () => new TableList);

export default moduleName;
