(function () {
    angular.module('angular.controller.mainapp')
        .controller('BasicCtrl', ['$scope', 'basicService', function ($scope, basicService) {
            $scope.changeName = function(msg){
                $scope.name = basicService.changeMessage(msg);
            };
        }])
        .controller('NestedCtrl', function ($scope) {
            $scope.message = 'The parent scope query is ' + $scope.query;
        });
}());