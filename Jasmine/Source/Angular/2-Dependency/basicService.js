(function () {
    angular.module('angular.dependency')
        .factory('basicSubService', function(){
            return {
                    changeSubMessage: function(msg) {
                    return msg + ' ~~~'
                }
            };
        })
        .factory('basicService', function(basicSubService){
            return {
                    changeMessage: function(msg) {
                    return basicSubService.changeSubMessage(msg) + ' !!!'
                }
            };
        })
}());