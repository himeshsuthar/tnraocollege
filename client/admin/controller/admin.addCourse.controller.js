angular.module('collegeApp')
	.controller('addCourseCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){
		
		$scope.addCourse = function(x){
			x['hod'] = x['fname']+' '+x['mname']+' '+x['lname'];
		var p="images/hod/"+x['fname']+x['lname']+'.jpg';
		x['hodphoto']=p.toLowerCase();
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