describe('Test with controller', function (){
  var $scope, $controller;

  beforeEach(function(){
    module('angular.controller.service');
    module('angular.controller.mainapp');
  });

  describe('BasicCtrl', function(){
      function validation(){
          $scope.name = 'Javascript';
          expect($scope.name).toBe('Javascript');
          $scope.changeName('REST');
          expect($scope.name).toBe('REST !!!');
      };

      it('fake service by injection', function (){
        module(function($provide){
          basicServiceMock = {
            changeMessage: function(msg){
              return msg + ' !!!';
            }
          };

          $provide.value('basicService', basicServiceMock);
        });

        inject(function (_$controller_) {
          $controller = _$controller_;        
        });

        $scope = {};
        $controller('BasicCtrl', {$scope: $scope});
        validation();

      });

      it('fake service by argument', function () {
        inject(function (_$controller_) {
          $controller = _$controller_;        
        });
        var $scope = {};

        basicServiceMock = {
              changeMessage: function(msg){
                return msg + ' !!!';
              }
            };

        $controller('BasicCtrl', { $scope: $scope, basicService: basicServiceMock });
        
        validation();
    });

    it('use ngMock $rootScope when apply or digest is needed for the scope', function (){
        inject(function (_$controller_, _$rootScope_) {
          $controller = _$controller_;    
          $scope = _$rootScope_.$new();    
        });

        basicServiceMock = {
              changeMessage: function(msg){
                return msg + ' !!!';
              }
            };

        $controller('BasicCtrl', { $scope: $scope, basicService: basicServiceMock });
        
        validation();
    });
  });

  describe('NestedCtrl', function () {
    var $childScope;

    beforeEach(function(){
        inject(function (_$controller_, _$rootScope_) {
          $controller = _$controller_;       
          $scope = _$rootScope_.$new(); 
        });
    });

    it('should set rootScope properties', function () {
      $childScope = $scope.$new();
      $scope.query = 'jasmine';
      
      $controller('NestedCtrl', {
        $scope: $childScope
      });

      expect($childScope.message).toBe('The parent scope query is jasmine');
    });

  });
  
});

