(function () {
    angular.module('angular.basic')
        .factory('basicService', function(){
            return {
                    changeMessage: function(msg) {
                    return msg + '!!!'
                }
            };
        });
}());