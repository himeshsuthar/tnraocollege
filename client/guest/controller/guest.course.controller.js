angular.module('collegeApp')
	.controller('courseCtrl',['$scope','$state','$stateParams','guestFactory',function($scope,$state,$stateParams,guestFactory){
		
activate();
function activate(){

	guestFactory.getAllCourses()
	.then(function(response){
		$scope.courses = response.data;
		console.log($scope.courses);
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