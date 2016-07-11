describe('test service with dependency in different module', function (){
  var basicService;
  
  beforeEach(function (){
    
    module('angular.dependency.main');

    module('angular.dependency.sub');

    module(function($provide){
      basicSubServiceMock = {
        changeSubMessage: function(msg){
          return msg + ' @@@';
        }
      };

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