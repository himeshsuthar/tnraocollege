angular.module('collegeApp')
	.controller('editEventCtrl', ['$scope','$stateParams','$state','adminFactory',function($scope,$stateParams,$state,adminFactory){

		var id=$stateParams.id;
		activate();
		function activate(){
			adminFactory.getSingleEvent(id)
			.then(function(response){
				$scope.event=response.data;
				// console.log($scope.singleEvent);

			},function(error){
				console.log(error);
			});
		}

		$scope.doUpdate= function(x){
			adminFactory.updateEvent(x)
			.then(function(response){
				alert("event details are successfully updated");
				// $state.go('admin.home');
			},function(error){
				console.log(error);
			});
		}
	}]);
