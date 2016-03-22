import DeleteItemButton from './shared/deleteItemButton';
import TableList from './shared/tableList';
import StarRating from './shared/rating';
import InfoItemButton from './shared/infoItemButton';
import Navigation from './navigation';


var moduleName = 'books.directives';

module.exports = angular.module(moduleName, [])
    .directive('deleteItemButton', () => new DeleteItemButton)
    .directive('tableList', () => new TableList)
    .directive('starRating', () => new StarRating)
    .directive('infoItemButton', () => new InfoItemButton)
    .directive('navigation', () => new Navigation);

export default moduleName;
