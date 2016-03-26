import DeleteItemButton from './directives/deleteItemButton';
import TableList from './directives/tableList';
import StarRating from './directives/rating';
import InfoItemButton from './directives/infoItemButton';
import Navigation from './navigation';
import SelectCollectionItems from './directives/selectCollectionItems'
import MultiSelect from './directives/multiSelectOLD'
import {MultiSelectDirective} from './directives/multiSelect/multiSelect.directive'

var moduleName = 'books.directives';

module.exports = angular.module(moduleName, [])
    .directive('deleteItemButton', () => new DeleteItemButton)
    .directive('tableList', () => new TableList)
    .directive('starRating', () => new StarRating)
    .directive('infoItemButton', () => new InfoItemButton)
    .directive('navigation', () => new Navigation)
    .directive('selectCollectionItems', () => new SelectCollectionItems)
    .directive('multiSelectOld', () => new MultiSelect)
    .directive('multiSelect', MultiSelectDirective);

export default moduleName;
