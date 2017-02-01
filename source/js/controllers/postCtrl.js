angular.module('amApp')
.controller('postController', ['$scope', 'postService', '$stateParams', function($scope, postService, $stateParams){

    $scope.getPosts = function() {
      postService.getPosts()
          .then(function (response) {
              $scope.posts = response;
          }, function (error) {
              $scope.status = 'Unable to load: ' + error.message;
          });

    }

    $scope.getPost = function(){
    	var id = $stateParams.postId;
      postService.getPost(id)
          .then(function (response) {
              $scope.post = response;
          }, function (error) {
              $scope.status = 'Unable to load: ' + error.message;
          });
    }

}]);
