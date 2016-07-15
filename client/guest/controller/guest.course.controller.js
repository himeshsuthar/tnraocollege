angular.module('collegeApp')
	.controller('courseCtrl',['$scope','$sce','$state','$stateParams','guestFactory',function($scope,$sce,$state,$stateParams,guestFactory){

		var course = $stateParams.course;
		console.log(course);
		activate();
	function activate(){

	guestFactory.getCourseDetails(course)
	.then(function(response){
		$scope.course = response.data;

		console.log($scope.course);
	},function(error){
		console.error(error);
	});

	$scope.contenthtml=function(){
		return $sce.trustAsHtml($scope.course.content);
	};

	guestFactory.getTeachersByCourse(course)
	.then(function(response){
		$scope.teachers = response.data;
		console.log($scope.teachers);
	},function(error){
		console.error(error);
	});

	guestFactory.getHodByCourse(course)
	.then(function(response){
		$scope.hod=response.data;
		console.log($scope.hod);
	},function(error){
		console.error(error);
	});
}




}]);

