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
			$scope.courses = response.data;
			 console.log($scope.courses);
		},function(error){
			console.error(error);
		});
	}
	$scope.deleteCourse = function(x){
			adminFactory.deleteCourse(x)
			.then(function(response){
				alert("Course successfully deleted");
				activate();
			},function(error){
				console.log(error);

			})
		}



}]);
