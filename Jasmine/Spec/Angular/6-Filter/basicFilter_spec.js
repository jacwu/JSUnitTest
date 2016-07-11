describe('basic filter test ', function() {
  var $filter;
  beforeEach(function(){
      module('angular.filter');
      inject(function(_$filter_){
        $filter = _$filter_;
      });
  });
  
    describe('on lengthfilter ', function () {
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
});