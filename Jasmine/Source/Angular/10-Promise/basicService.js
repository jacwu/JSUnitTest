(function () {
    angular.module('angular.promise')
        .factory('basicService', function($http){
            return {
                    getData: function (url){
                        $http.get(url)
                        .then(function (r) {
                            return r.data;
                        });
                }
            };
        });
}());
