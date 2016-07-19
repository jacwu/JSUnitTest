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

  it('two way binding on isolated scoped', function(){
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.twoway.book).toEqual('typescript');
    isolatedScope.twoway.book = "webapi";
    expect(scope.twoway.book).toEqual('webapi');
  });

  it('notify on isolated scope should be one-way bound', function(){
    var isolatedScope = element.isolateScope();
    expect(isolatedScope.oneway).toEqual('true');
  });

  it('onChange should be a function', function(){
      var isolatedScope = element.isolateScope();

      expect(typeof(isolatedScope.notifyParent)).toEqual('function');
  });

  it('should call onChange method of scope when invoked from isolated scope', function () {
      var isolatedScope = element.isolateScope();
      isolatedScope.notifyParent();

      expect(scope.onNotify).toHaveBeenCalled();
  });
});