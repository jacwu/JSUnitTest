describe('promise test with controller', function (){
  var $scope, $controller, deferred;

  beforeEach(function (){    
    module('angular.promise');
    module(function($provide){
      basicServiceMock = {
        getData: function(url){
          deferred.resolve({'data': 'value'});
          return deferred.promise;
        }
      };

      $provide.value('basicService', basicServiceMock);
    });

    inject(function (_$controller_, $q, $rootScope) {
      $controller = _$controller_; 
      deferred = $q.defer(); 
      $scope = $rootScope.$new();
    });
  });
  
  it('promise should work after apply', function (){
    var myCtrl = $controller('basicCtrl', {$scope: $scope});
    $scope.getData('test.com');
    $scope.$apply();
    expect($scope.ready).toBeTruthy();
  });
});