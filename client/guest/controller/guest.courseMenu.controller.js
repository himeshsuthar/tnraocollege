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
		/*console.log($scope.courses);*/
	},function(error){
		console.error(error);
	});

	guestFactory.getHods()
	.then(function(response){
		$scope.hods=response.data;
		console.log($scope.hod);
	},function(error){
		console.error(error);
	});

}
		/*var course = $stateParams.course;

		guestFactory.getCourseDetails(course)
		.then(function(response){
			$scope.record = response.data[0];
			console.log($scope.record);

		},function(error){
			console.error(error);
		});*/
	}])