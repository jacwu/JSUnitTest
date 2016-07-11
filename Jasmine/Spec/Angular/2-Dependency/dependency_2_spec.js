describe('test service with dependency in unit test mode', function (){
  var basicService;
  
  beforeEach(function (){
    
    module('angular.dependency');

    module(function($provide){
      basicSubServiceMock = {
        changeSubMessage: function(msg){
          return msg + ' @@@';
        }
      };
      // use spyOn as well to spy the return value
      // spyOn(basicSubServiceMock, 'changeSubMessage').and.returnValue('hard code');
      $provide.value('basicSubService', basicSubServiceMock);
    });
    
    inject(function($injector) {
      basicService = $injector.get('basicService');
    });
  });
  
  it('should changeMessage successfully', function (){
    var result = basicService.changeMessage('Hellow World');
    expect(result).toBe('Hellow World @@@ !!!');
  });
});