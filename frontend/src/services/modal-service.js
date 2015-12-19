import _ from 'lodash';
module.exports = angular.module('books.modalService', [])
    .service('modalService', modalService)
    .filter("sanitize", sanitize);

function sanitize ($sce) {
    return function(htmlCode){
        return $sce.trustAsHtml(htmlCode);
    }
}

function modalService($uibModal) {

    const modalDefaults = {
        backdrop: true,
        keyboard: true,
        modalFade: true,
        template: require('../components/modal/template.html')
    };

    const modalOptions = {
        closeButtonText: 'Close',
        actionButtonText: 'OK',
        displayAction: false,
        headerText: 'Proceed?',
        bodyText: 'Perform this action?'
    };

    this.showModal = function (customModalOptions) {
        customModalOptions = customModalOptions || {};
        angular.extend(modalOptions, customModalOptions);

        let modalConfig = _.clone(modalDefaults);
        if (customModalOptions.bodyText) {
            modalConfig.template = modalConfig.template.replace('@body@', customModalOptions.bodyText)
        }

        modalConfig.controller = function ($scope, $uibModalInstance) {
            $scope.modalOptions = modalOptions;

            $scope.modalOptions.ok = function () {
                $uibModalInstance.close($scope);
            };

            $scope.modalOptions.closeModal = function () {
                $uibModalInstance.dismiss('cancel');
            };
        };

        return $uibModal.open(modalConfig).result;
    };

}
