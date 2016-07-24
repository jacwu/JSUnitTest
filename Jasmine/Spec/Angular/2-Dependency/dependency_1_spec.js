describe('test service with dependency as integration mode', function (){
  var basicService;
  
  beforeEach(function (){
    
    module('angular.dependency');
    
    inject(function($injector) {
      basicService = $injector.get('basicService');
    });
  });
  
  it('should changeMessage successfully', function (){
    var result = basicService.changeMessage('Hellow World');
    expect(result).toBe('Hellow World ~~~ !!!');
  });
});