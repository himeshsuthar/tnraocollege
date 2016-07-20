angular.module('collegeApp')
	.controller('courseMenuCtrl',['$scope','$state','$stateParams','guestFactory','$sce',function($scope,$state,$stateParams,guestFactory,$sce){
	$scope.stateChange = function(x){
		$state.go('courseDetails',{ 'course' : x});
		console.log(x);
	}
	activate();
	function activate(){
			guestFactory.getAllCourses()
			.then(function(response){
				$scope.courses = response.data;
				// console.log($scope.courses);
				$scope.contenthtml=function(x) {
					x = x.substr(0,200);
					x+='...';
					return $sce.trustAsHtml(x);
				}
			},function(error){
				console.error(error);
			});
		}
}]);
