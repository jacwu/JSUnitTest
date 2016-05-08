describe('Angular Test', function() {
  beforeEach(module('myApp'));

  describe('for controller', function () {
      var $controller;

        beforeEach(inject(function(_$controller_){            
            $controller = _$controller_;
        }));

        describe('PwdCtrl', function() {
            var $scope, controller;

            beforeEach(function() {
                $scope = {};
                controller = $controller("PwdCtrl", { $scope: $scope });
            });

            it('strength should be strong', function() {
                $scope.password = 'thisisalongpassword';
                $scope.grade();
                expect($scope.strength).toEqual('strong');
            });

            it('strength should be weak', function() {
                $scope.password = 'ab';
                $scope.grade();
                expect($scope.strength).toEqual('weak');
            });
        });
  });
  
  describe('for filter', function () {
    var $filter;

    beforeEach(inject(function(_$filter_){
        $filter = _$filter_;
    }));

    describe('test', function () {
        var lengthfilter;
        beforeEach(function () {
            lengthfilter = $filter('lengthFilter');
        });
        
        it('returns 0 when given null', function() {            
            expect(lengthfilter(null)).toEqual(0);
        });

        it('returns non-zero value', function() {
            expect(lengthfilter('hello')).toEqual(5);
        });
    });    
  })  
});