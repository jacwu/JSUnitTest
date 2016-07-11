(function () {
    angular.module('angular.filter')
        .filter('lengthFilter', function() {
          return function(text) {
            return ('' + (text || '')).length;
          }
        });
}());