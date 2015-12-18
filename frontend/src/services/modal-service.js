module.exports = angular.module('books.modalService', [])
    .service('modalService', modalService)
    .filter("sanitize", sanitize);

function sanitize ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}

function modalService($uibModal) {

    var modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        template: require('../components/modal/template.html')
    };

    var modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        displayAction: false,
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
    };

    this.showModal = function (customModalOptions) {
        customModalOptions = customModalOptions || {};

        angular.extend(modalOptions, customModalOptions);

        modalDefaults.controller = function ($scope, $uibModalInstance) {
            $scope.modalOptions = modalOptions;

            if (!$scope.modalOptions.ok) {
                $scope.modalOptions.ok = function () {
                    //TODO: Add action
                    $uibModalInstance.close();
                };
            }

            $scope.modalOptions.close = function () {
                $uibModalInstance.dismiss('cancel');
            };
        };

        return $uibModal.open(modalDefaults).result;
    };

}
