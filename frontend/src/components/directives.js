import DeleteItemButton from './shared/deleteItemButton';
import TableList from './shared/tableList';
import StarRating from './shared/rating';
import InfoItemButton from './shared/infoItemButton';

var moduleName = 'books.directives';

module.exports = angular.module(moduleName, [])
    .directive('deleteItemButton', () => new DeleteItemButton)
    .directive('tableList', () => new TableList)
    .directive('starRating', () => new StarRating)
    .directive('infoItemButton', () => new InfoItemButton);

export default moduleName;
