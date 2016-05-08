angular.module('myApp', [])
.controller('PwdCtrl', function PasswordController($scope) {
  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
  $scope.items = ['a','b','c'];
})
 .filter('lengthFilter', function() {
  return function(text) {
    return ('' + (text || '')).length;
  }
});