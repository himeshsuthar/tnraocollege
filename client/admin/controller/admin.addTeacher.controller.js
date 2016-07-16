angular.module('collegeApp')
.controller('addTeacherCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
	activate();
	function activate(){	
		adminFactory.getCourses()
		.then(function(response){
			$scope.courses=response.data;
			console.log($scope.courses);
		},function(error){
			console.error(error);
		})
	}
	$scope.doAddTeacher=function(x){	
		x['name'] = x['fname']+' '+x['mname']+' '+x['lname'];
		var p="images/teachers/"+x['fname']+x['lname']+'.jpg';
		x['photo']=p.toLowerCase();
		console.log(x);
		x['courseid']=x.course['course'];
		
		console.log(x);
		adminFactory.addTeacher(x)
		.then(function(response){
			alert("teacher had been added");
		/*	$scope.x=null;*/

		},function(error){
			console.error(error);
			alert("teacher couldn't add right now. contact after some time");
		})
	}
}])