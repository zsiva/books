
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

    vm.updateStars = function() {
      var idx = 0;
      vm.stars = [ ];
      for (idx = 0; idx < vm.max; idx += 1) {
        vm.stars.push({
          full: vm.score > idx
        });
      }
    };

    vm.starClass = function(star, idx) {
      var starClass = 'fa-star-o';
      if (star.full) {
        starClass = 'fa-star';
      }
      return starClass;
    };

    $scope.$watch('vm.score', function(newValue, oldValue) {
      if (newValue !== null && newValue !== undefined) {
        vm.updateStars();
      }
    });
  }
