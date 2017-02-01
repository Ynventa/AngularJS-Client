angular.module('amApp',['ui.router', 'amApp.constants'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    /*
    Next lines define routes
    */
    $stateProvider.state('home',{
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
		.state('faq', {
      url: '/faq',
      templateUrl: 'views/faq.html',
      controller: 'homeController'
    })
		.state('terms', {
      url: '/terms',
      templateUrl: 'views/terms.html',
      controller: 'homeController'
    })
		.state('policy', {
      url: '/policy',
      templateUrl: 'views/policy.html',
      controller: 'homeController'
    })
		.state('about', {
      url: '/about',
      templateUrl: 'views/about.html',
      controller: 'homeController'
    })
		.state('suggestions', {
      url: '/suggestions',
      templateUrl: 'views/suggestions.html',
      controller: 'homeController'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'userController'
    })
		.state('register', {
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'userController'
    })
		.state('users', {
      url: '/users',
      templateUrl: 'views/users.html',
      controller: 'userController'
    })
		.state('posts', {
      url: '/posts',
      templateUrl: 'views/posts.html',
      controller: 'postController'
    })
    .state('post', {
      url: '/post/{postId}',
      templateUrl: 'views/post.html',
      controller: 'postController'
    })


		$urlRouterProvider.otherwise('/');

	}])
