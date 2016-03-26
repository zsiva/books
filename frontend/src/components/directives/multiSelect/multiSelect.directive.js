import { MultiSelectController as controller } from './multiSelect.controller';
import template from './multiSelect.html';

let MultiSelectDirective = () => {
  return {
    restrict: 'EA',
    scope: {},
    controllerAs: 'vm',
    controller,
    template,
    bindToController: {
        selectedModel: '=',
        buttonText: '=',
        searchFilter: '=?',
        collection: '='
    }
  };
};

export { MultiSelectDirective };
