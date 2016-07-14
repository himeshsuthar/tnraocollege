angular.module('collegeApp')
	.controller('newsCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){
		
	$scope.editNews = function(x){
		$state.go('admin.editNews',{ 'id' : x });
		console.log(x);
	}


		activate();
function activate(){

	adminFactory.getNews()
	.then(function(response){
		$scope.news = response.data;
		console.log($scope.news);
	},function(error){
		console.error(error);
	});
}

	}]);		