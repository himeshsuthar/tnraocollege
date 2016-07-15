angular.module('collegeApp')
	.controller('adminLoginCtrl',['$scope','$state','adminFactory',function($scope,$state,adminFactory){
		$scope.doLogin = function(x){
			 adminFactory.login(x)
			 .then(function(response){
			 	console.log(response.data);
			 	$state.go('admin.home');
			 },function(error){
		 		console.log(error);
		 		alert("username or password is incorrect!");
			 });
	}
}]);