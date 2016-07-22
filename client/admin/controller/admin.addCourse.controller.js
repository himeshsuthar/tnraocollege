angular.module('collegeApp')
	.controller('addCourseCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){

		$scope.addCourse = function(x){
				console.log(x);
			adminFactory.addCourse(x)
			.then(function(response){
				/*$scope.x=null;*/
				alert("course has added");
				$state.go('admin.home');
			},function(error){
				console.log(error);
				console.error(error);
			});


		}

	}]);
