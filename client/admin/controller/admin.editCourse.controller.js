angular.module('collegeApp')
	.controller('editCourseCtrl', ['$scope','$stateParams','$state','adminFactory',function($scope,$stateParams,$state,adminFactory){
		
		var course=$stateParams.course;
		activate();
		function activate(){
			adminFactory.getCourseDetails(course)
			.then(function(response){
				$scope.courseDetails=response.data;
				console.log($scope.courseDetails);

			},function(error){
				console.log(error);
			});
		}
		
		$scope.doUpdate= function(x){
			adminFactory.updateCourseDetails(x)
			.then(function(response){
				alert("Course details are successfully updated");
				$state.go('admin.home');
			},function(error){
				console.log(error);
			});
		}
	}]);		