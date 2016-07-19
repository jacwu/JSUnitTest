describe('Test basicDirective', function() {
  var element;
  var scope;

  beforeEach(function() {
    module('angular.directive.isolated');

    inject(function($rootScope, $compile) {
      // Get a new scope
      scope = $rootScope.$new();
      scope.twoway = {book: 'typescript'};
      scope.onNotify = jasmine.createSpy('onNotify');

      // Compile some HTML that uses the directive
      element = $compile(angular.element('<isolated-directive twoway="twoway" oneway="true" notify="onNotify()"></isolated-directive>'))(scope);
      scope.$digest();
    });
  });

  it('two way binding on isolated scope', function(){
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.twoway.book).toEqual('typescript');
    isolatedScope.twoway.book = "webapi";
    expect(scope.twoway.book).toEqual('webapi');
  });

  it('one way binding on isolated scope', function(){
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.oneway).toEqual('true');
  });

  it('should call onNotify method of scope when invoked from isolated scope', function () {
      var isolatedScope = element.isolateScope();
      expect(typeof(isolatedScope.notifyParent)).toEqual('function');
      isolatedScope.notifyParent();
      expect(scope.onNotify).toHaveBeenCalled();
  });
});