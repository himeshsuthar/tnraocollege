angular.module('collegeApp')
	.controller('addEventCtrl',['$scope','$state','$stateParams','adminFactory','$rootScope',function($scope,$state,$stateParams,adminFactory,$rootScope){

		$scope.addEvent = function(x){
		x['date'] =x['eventDate'].getFullYear() + "/"+
						(x['eventDate'].getMonth()+1) + "/"+
						x['eventDate'].getDate();

		adminFactory.addEvent(x)
		.then(function(response){


			$scope.event=response.data;
			console.log($scope.event);
			 $state.go('admin.addEventPhotos',{ 'id' :  $scope.event.id});


		},function(error){
			console.error(error);
		})
	}

	$

}])
