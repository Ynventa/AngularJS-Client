angular.module('amApp')
.controller('userController', ['$scope', 'userService', '$state', '$stateParams', function($scope, userService, $state, $stateParams){

	$scope.getUsers = function() {
		userService.allUsers()
				.then(function (response) {
						$scope.users = response;
				}, function (error) {
						$scope.status = 'Unable to load: ' + error.message;
				});

	}

}]);
