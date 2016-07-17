angular.module('collegeApp')
.controller('courseCtrl',['$scope','$sce','$state','$stateParams','guestFactory',function($scope,$sce,$state,$stateParams,guestFactory){

	var course = $stateParams.course;
	console.log(course);
	activate();
	function activate(){
		guestFactory.getCourseDetails(course)
		.then(function(response){
			$scope.course = response.data;
		},function(error){
			console.error(error);
		});

		$scope.contenthtml=function(){
			return $sce.trustAsHtml($scope.course.content);
		};

		guestFactory.getTeachersByCourse(course)
		.then(function(response){
			$scope.teachers = response.data;
			$scope.hod = getHod();

		},function(error){
			console.error(error);
		});
	}

	function getHod(){

		for (var x=0;x<$scope.teachers.length;x++) {
		if ($scope.teachers[x].post == 'H.O.D.') {
				var hod = $scope.teachers[x];
				$scope.teachers.splice(x,1);
				return hod;
			}
		}
	}


}]);
