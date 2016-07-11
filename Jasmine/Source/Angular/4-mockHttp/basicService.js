(function () {
    angular.module('angular.mockhttp.sub')
        .factory('basicSubService', function(){
            return {
                    changeSubMessage: function(msg) {
                    return msg + ' ~~~'
                }
            };
        });
     angular.module('angular.mockhttp')   
        .factory('basicHttpService', function(basicSubService, $http){
            return {
                    getBookInfo: function(bookUrl) {
                        return $http.get(bookUrl)
                            .then(function(result) {
                            return basicSubService.changeSubMessage(result.data.book.title);
                        });
                    }
            };
        });
}());
