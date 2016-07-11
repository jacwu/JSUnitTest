(function () {
    "use strict";
    angular.module('angular.dependency.sub', []);
    angular.module('angular.dependency.main', ['angular.dependency.sub']);
}());