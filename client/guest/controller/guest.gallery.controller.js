angular.module('collegeApp')
	.controller('galleryCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		
activate();
function activate(){

	guestFactory.getEvents()
	.then(function(response){
		$scope.events = response.data;
		console.log($scope.events);
	},function(error){
		console.error(error);
	});
}
		
	}])