angular.module('collegeApp')
	.controller('courseCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){
		alert("hello");
		/*var course = $stateParams.course;

		guestFactory.getCourseDetails(course)
		.then(function(response){
			$scope.record = response.data[0];
			console.log($scope.record);

		},function(error){
			console.error(error);
		});*/
	}])