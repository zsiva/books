
module.exports = angular.module('books.rating', []).directive('starRating', starRating);

function starRating() {
    return {
        restrict: 'E',
        bindToController: true,
        controllerAs: 'vm',
        scope: {
          score: '=',
          max: '=',
          readonly: '=?'
        },
        template: require('./template.html'),
        controller: ratingController
    };
}

function ratingController($scope) {
    const vm = this;

    if(!vm.score) {
      vm.score = 0;
    }
    if(!vm.max) {
      vm.max = 5;
    }
    vm.updateStars = function() {
      vm.stars = [ ];
      for (let idx = 0; idx < vm.max; idx++) {
        vm.stars.push({
          full: vm.score > idx
        });
      }
    };

    vm.setRating = function(idx) {
      if (!vm.readonly) {
        vm.score = idx + 1;
      }
    };

    $scope.$watch('vm.score', function(newValue, oldValue) {
      if (newValue !== null && newValue !== undefined) {
        vm.updateStars();
      }
    });
  }
