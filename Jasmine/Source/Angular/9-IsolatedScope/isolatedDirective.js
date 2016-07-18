(function () {
    "use strict";
    angular.module('angular.directive.isolated')
      .directive('isolatedDirective', function() {
        return {
          restrict: 'E',
          scope: {
            twoway: '=',
            oneway: '@',
            notifyParent: '&notify'}       
        }
      });
}());