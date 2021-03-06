// basic service
describe('test basicService ', function (){
  var basicService;
  
  // excuted before each "it" is run.
  beforeEach(function (){
    
    // load the module.
    angular.mock.module('angular.basic');
    
    // Get the service from the injector
    angular.mock.inject(function($injector) {
      basicService = $injector.get('basicService');
    });
  });
     
  // check to see if it has the expected function
  it('should have an changeMessage function', function () { 
    expect(angular.isFunction(basicService.changeMessage)).toBe(true);
  });
  
  // check to see if it does what it's supposed to do
  it('should changeMessage successfully', function (){
    var result = basicService.changeMessage('Hellow World');
    expect(result).toBe('Hellow World!!!');
  });
});