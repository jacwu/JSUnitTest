describe('Test basicDirective', function() {
  var element;
  var scope;

  beforeEach(function() {
    module('angular.directive.isolated');

    inject(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();
      scope.twoway = {book: 'typescript'};

      // Compile some HTML that uses the directive
      element = $compile(angular.element('<isolated-directive oneway="thing" twoway="twoway"></isolated-directive>'))(scope);
      scope.$digest();
    });
  });

  it(' two way binding on isolated scoped', function(){
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.twoway.book).toEqual('typescript');
    isolatedScope.twoway.book = "webapi";
    expect(scope.twoway.book).toEqual('webapi');
  });
});