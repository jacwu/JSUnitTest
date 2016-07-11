(function () {
    angular.module('angular.controller.service')
        .factory('basicService', function(){
            return {
                    changeMessage: function(msg) {
                    return msg + ' ~~~'
                }
            };
        });
}());
