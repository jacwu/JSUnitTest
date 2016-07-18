(function () {
    "use strict";
    angular.module('angular.directive.external')
      .controller('CounterDirectiveCtrl', ['$scope', CounterDirectiveCtrl])
      .directive('basicDirective', function() {
        return {
          controller: CounterDirectiveCtrl,
          templateUrl: '/Source/Angular/8-DirectiveExternal/basicDirectiveTemplate.html'
        }
      });
    
    function CounterDirectiveCtrl($scope){
        $scope.counter = 0;
        $scope.onclick = function () {
          $scope.counter += 1;
        }
      };
}());