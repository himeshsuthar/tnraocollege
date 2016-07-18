angular.module('collegeApp')
.controller('addTeacherCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){

	$scope.doAddTeacher=function(x){
		x['name'] = x['fname']+' '+x['mname']+' '+x['lname'];
		var p="images/teachers/"+x['fname']+x['lname']+'.jpg';
		x['photo']=p.toLowerCase();



		console.log(x);
		adminFactory.addTeacher(x)
		.then(function(response){
			alert("teacher had been added");
			$scope.x=null;
			// $state.go("admin.home");
		},function(error){
			console.error(error);
			alert("teacher couldn't add right now. contact after some time");
		})
	}
}])
