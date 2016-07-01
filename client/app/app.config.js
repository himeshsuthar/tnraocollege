angular.module('collegeApp')
	.config(['$urlRouterProvider','$stateProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$animateProvider){
	
	$stateProvider
		.state('home',{
			url:'/',
			templateUrl:'guest/view/home.html',
			controller:'',
		})
		.state('course',{
			url:'/course',
			templateUrl:'guest/view/courseMenu.html',
			controller:'courseCtrl',
		})
		.state('courseDetails',{
			url:'/course/detail',
			templateUrl:'guest/view/courseDetails.html',
			controller:'courseCtrl',
		})
		.state('contactUs',{
			url:'/contactUs',
			templateUrl:'guest/view/contactUs.html',
			controller:'',
		})
				

		$urlRouterProvider.otherwise('/');

	}])
	.run(['$rootScope',function($rootScope){
		$rootScope.serverUrl = 'http://localhost/tnraocollege/server/guest/';
		$rootScope.serverUrl1 = 'http://localhost/tnraocollege/server/admin/';
		
	}]);
