angular.module('collegeApp')
	.controller('homeCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
activate();
function activate(){

	guestFactory.getNotification()
	.then(function(response){
		$scope.notifications = response.data;
		console.log($scope.notifications);
	},function(error){
		console.error(error);
	});
}
		
	}])