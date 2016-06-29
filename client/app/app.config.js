angular.module('college')
	.config(['$urlRouterProvider','$urlStateProvider',function($urlRouterProvider,$urlStateProvider){

		$stateProvider
		
		.state('course',{
			url:'/course',
			templateUrl:'guest/view/courseMenu.html',
			controller:'',
		})
		$urlRouteProvider.otherwise('/');

	}])
	.run(['$rootScope',function($rootScope){
		$rootScope.serverUrl = 'http://localhost/tnraocollege/server/guest/';
		$rootScope.serverUrl1 = 'http://localhost/tnraocollege/server/admin/';
		
	}]);
