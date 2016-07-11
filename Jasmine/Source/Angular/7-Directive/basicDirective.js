(function () {
    "use strict";
    angular.module('angular.directive')
      .directive('basicDirective', function() {
        return {
          controller: ['$scope', CounterDirectiveCtrl],
          template: '<div' +
                    '      ng-click="onclick()">' +
                    'You\'ve clicked this div {{counter}} times' +
                    '</div>'
        }
      });
    
    function CounterDirectiveCtrl($scope){
        $scope.counter = 0;
        $scope.onclick = function () {
          $scope.counter += 1;
        }
      };
}());