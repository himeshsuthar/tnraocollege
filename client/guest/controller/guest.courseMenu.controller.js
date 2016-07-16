angular.module('collegeApp')
	.controller('courseMenuCtrl',['$scope','$state','$stateParams','guestFactory',function($scope,$state,$stateParams,guestFactory){
	$scope.stateChange = function(x){
		$state.go('courseDetails',{ 'course' : x.course});
		console.log(x);
	}
	activate();
	function activate(){
			guestFactory.getAllCourses()
			.then(function(response){
				$scope.courses = response.data;
			},function(error){
				console.error(error);
			});


			guestFactory.getHods().then(function(response){
				$scope.hods=response.data;
				$scope.getHOD = function(y){
					var x = 0;
					var z = $scope.hods;
					for (x = 0; x < $scope.hods.length; x++) {
						if(y.localeCompare($scope.hods[x].course)) {
							return ($scope.hods[x].name);
						}
					}
				}
				$scope.getHODPhoto = function(y){
					var x = 0;
					for (x = 0; x < $scope.hods.length; x++) {
						if(y.localeCompare($scope.hods[x].course)) {
							return ($scope.hods[x].photo);
						}
					}
				}

			},function(error){
				console.error(error);
			});
		}




}])
