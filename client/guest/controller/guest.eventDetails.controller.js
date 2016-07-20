angular.module('collegeApp')
.controller('guestEventDetailsCtrl',['$scope','$state','$stateParams','$log','guestFactory',function($scope,$state,$stateParams,$log,guestFactory)
{
	$scope.id = $stateParams.id;
activate();
function activate(){

	guestFactory.getEvent($scope.id)
				.then(function (response) {
					$scope.event = response.data[0];
					// console.log($scope.event);
				},function (error) {
					  alert("There seems to be some error. Please try again later.");
					  console.log(error);
				});


	guestFactory.getEventPhotos($scope.id)
	.then(function(response){
		$scope.eventPhotos=response.data;
		console.log($scope.eventPhotos);
	},function(error){
		console.log(error);
	})
}
   $scope.openLeftMenu = function() {
   	console.log("openLeftMenu");
    $mdSidenav('right').toggle();
  };
}]);
