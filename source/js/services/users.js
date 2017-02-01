angular.module('amApp')
.factory('userService', ['$http', 'API_END_POINT', function($http, API_END_POINT) {

    return {
        allUsers: function(){
            return $http.get(API_END_POINT + "users").
                then(function(resp){
                    return resp.data;
                }, function(error) {
                    return error.data
                });
        }

    }
}]);
