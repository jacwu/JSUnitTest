describe('Test basicDirective', function() {
  var injector;
  var element;
  var scope;

  beforeEach(function() {
    module('angular.directive');

    inject(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
      element = $compile('<basic-directive></basic-directive>')(scope);
      scope.$digest();
    });
  });

  it('increments counter when you click', function() {
    expect(element.text()).toEqual('You\'ve clicked this div 0 times');
    // jquery need be referenced before angular
    element.find('div').click();
    
    expect(element.text()).toEqual('You\'ve clicked this div 1 times');
  });
});