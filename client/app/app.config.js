angular.module("college")
	.config(['$urlRouterProvider','$urlStateProvider',function($urlRouterProvider,$urlStateProvider){

		$stateProvider
		.state(''{
			url:'';
			templateUrl:'';
			controller:
		})
	}])
	.run(['$rootScope',function($rootScope){
		$rootScope.serverUrl = 'http://localhost/attendance/server/guest/';
		$rootScope.serverUrl1 = 'http://localhost/attendance/server/admin/';
		
	}]);
