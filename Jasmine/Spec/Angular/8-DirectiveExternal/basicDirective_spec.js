describe('Test basicDirective', function() {
  var element;
  var scope;

  beforeEach(function() {
    // Create a new dependency injector using the 'myApp' module
    module('angular.directive.external');
    module('directive.module');
    inject(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();

      // Compile some HTML that uses the directive
      element = $compile(angular.element('<basic-directive></basic-directive>'))(scope);
      scope.$digest();
    });
  });

  it('increments counter when you click', function() {
    expect(element.text().trim()).toEqual('You have clicked this div 0 times');
    // jquery need be referenced before angular
    element.find('div').click();
    
    expect(element.text().trim()).toEqual('You have clicked this div 1 times');
  });
});