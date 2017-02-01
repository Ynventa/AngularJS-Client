angular.module('amApp')
.controller('homeController', ['$scope', '$stateParams', 'postService', function($scope, $stateParams, postService){

    $scope.language = 'AngularJS';
    $scope.author = 'Ivan Schwindt';

		$scope.getPosts = function() {
      postService.getPosts()
          .then(function (response) {
              $scope.posts = response;
          }, function (error) {
              $scope.status = 'Unable to load: ' + error.message;
          });

    }

}])
