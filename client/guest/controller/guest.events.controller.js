angular.module('collegeApp')
	.controller('guestEventsCtrl',['$scope','$state','$stateParams','guestFactory',function($scope,$state,$stateParams,guestFactory){


		$scope.stateChange = function(x){

		$state.go('eventDetails',{ 'id' : x });

	}



		activate();
		function activate(){

			guestFactory.getEvents()
				.then(function(response){
					$scope.events=response.data;
					console.log($scope.events);

				},function(err){
					alert("There seems to be some error. Please try again later.");
				});
				

		}


	}]);
