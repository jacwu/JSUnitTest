(function () {
    angular.module('angular.controller.mainapp')
        .controller('basicCtrl', ['$scope', 'basicService', function ($scope, basicService) {
            $scope.changeName = function(msg){
                $scope.name = basicService.changeMessage(msg);
            };
        }]);
}());