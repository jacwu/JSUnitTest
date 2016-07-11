(function () {
    angular.module('angular.dependency.sub')
        .factory('basicSubService', function(){
            return {
                    changeSubMessage: function(msg) {
                    return msg + ' ~~~'
                }
            };
        });
     angular.module('angular.dependency.main')   
        .factory('basicService', function(basicSubService){
            return {
                    changeMessage: function(msg) {
                    return basicSubService.changeSubMessage(msg) + ' !!!'
                }
            };
        });
}());