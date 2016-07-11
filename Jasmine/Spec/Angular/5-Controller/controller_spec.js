describe('basic test with controller', function (){
  var $scope, $controller;

  beforeEach(function (){    
    module('angular.controller.service');
    module(function($provide){
      basicServiceMock = {
        changeMessage: function(msg){
          return msg + ' !!!';
        }
      };

      $provide.value('basicService', basicServiceMock);
    });
    
    module('angular.controller.mainapp');

    inject(function (_$controller_) {
      $controller = _$controller_;        
    });
  });
  
  it('scope should be changed successfully', function (){
    
    $scope = {};
    var myCtrl = $controller('basicCtrl', {$scope: $scope});
    $scope.name = 'Javascript';
    expect($scope.name).toBe('Javascript');
    $scope.changeName('REST');
    expect($scope.name).toBe('REST !!!');

  });
});