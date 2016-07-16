angular.module('collegeApp')
.controller('galleryCtrl',['$scope','$state','$stateParams','$log','guestFactory',function($scope,$state,$stateParams,$log,guestFactory)
{
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
   $scope.openLeftMenu = function() {
   	console.log("openLeftMenu");
    $mdSidenav('right').toggle();
  };
}]);
		
		
