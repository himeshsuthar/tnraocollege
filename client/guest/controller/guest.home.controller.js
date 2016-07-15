angular.module('collegeApp')
	.controller('homeCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
activate();
function activate(){

	guestFactory.getNotification()
	.then(function(response){
		$scope.feeds = response.data;
		console.log($scope.feeds);
	},function(error){
		console.error(error);
	});
}
		
	}])