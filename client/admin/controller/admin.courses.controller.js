angular.module('collegeApp')
.controller('coursesCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){

	$scope.editCourse = function(x){
		$state.go('admin.editCourse',{ 'course' : x });
		console.log(x);
	}

	activate();
	function activate(){

		adminFactory.getCoursesDetails()
		.then(function(response){
			$scope.coursesDetails = response.data;
			console.log($scope.coursesDetails);
		},function(error){
			console.error(error);
		});
	}


}]);		