(function () {
    angular.module('angular.promise')
        .controller('basicCtrl', ['$scope', 'basicService', function ($scope, basicService) {
            $scope.getData = function(url){
                basicService.getData(url).then(function(){
                    $scope.ready = true; 
                })
            };
        }]);
}());