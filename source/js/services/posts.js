angular.module('amApp')
.factory('postService', ['$http', 'API_END_POINT', function($http, API_END_POINT) {

    return {
        getPosts: function(){
            return $http.get(API_END_POINT + "posts").
                then(function(resp){
                    return resp.data;
                }, function(error) {
                    return error.data
                });
        },
        getPost: function(id){
            return $http.get(API_END_POINT + "posts/" + id).
                then(function(resp){
                    return resp.data;
                }, function(error) {
                    return error.data
                });
        }
    }
}]);
