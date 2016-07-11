describe('test service with http get', function (){
  var basicHttpService, $httpBackend;
  
  beforeEach(function (){
    
    module('angular.mockhttp');

    module('angular.mockhttp.sub');

    module(function($provide){
      basicSubServiceMock = {
        changeSubMessage: function(msg){
          return msg + ' @@@';
        }
      };

      $provide.value('basicSubService', basicSubServiceMock);
    });
    
    inject(function($injector) {
      basicHttpService = $injector.get('basicHttpService');
      $httpBackend = $injector.get('$httpBackend');
    });
  });

  // make sure no expectations were missed in your tests.
  // (e.g. expectGET or expectPOST)
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });
  
  it('should get mocked json data successfully', function (){
    // set up some data for the http call to return and test later.
    var returnData = { 
      book: {title: 'RESTFul', author: 'Roy'},
      available: true};
    
    // expectGET to make sure this is called once.
    $httpBackend.expectGET('bookinfo.json').respond(returnData);
    
    // make the call.
    var returnedPromise = basicHttpService.getBookInfo('bookinfo.json');
    
    // set up a handler for the response, that will put the result
    // into a variable in this scope for you to test.
    var result;
    returnedPromise.then(function(response) {
      result = response;
    });
    
    // flush the backend to "execute" the request to do the expectedGET assertion.
    $httpBackend.flush();

    expect(result).toBe('RESTFul @@@');
  });
});