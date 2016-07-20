angular.module('collegeApp')
	.controller('editTeacherCtrl', ['$scope','$stateParams','$state','adminFactory',function($scope,$stateParams,$state,adminFactory){

		var id=$stateParams.id;
		activate();
		function activate(){
			adminFactory.getTeacher(id)
			.then(function(response){
				$scope.teacher=response.data;
				// console.log($scope.teacher);

			},function(error){
				console.log(error);
			});
		}

		$scope.doUpdate= function(teacher){
			adminFactory.updateTeacher(teacher)
			.then(function(response){
				alert("Teacher details are successfully updated");
			//	$state.go('admin.home');
			},function(error){
				console.log(error);
			});
		}

	}]);
