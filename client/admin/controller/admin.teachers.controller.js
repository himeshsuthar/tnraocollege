angular.module('collegeApp')
.controller('teachersCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){

	$scope.editTeacher = function(x){

		$state.go('admin.editTeacher',{ 'id' : x });
		console.log(x);
	}



	activate();
	function activate(){

		adminFactory.getTeachers()
		.then(function(response){
			$scope.teachers = response.data;
			// console.log($scope.teachers);
		},function(error){
			console.error(error);
		});
	}
	$scope.deleteTeacher = function(x){
			adminFactory.deleteTeacher(x)
			.then(function(response){
				alert("teacher successfully deleted");
				activate();
			},function(error){
				console.log(error);

			})
		}



}]);
