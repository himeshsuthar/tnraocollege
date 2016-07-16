angular.module('collegeApp')
	.controller('editNewsCtrl', ['$scope','$stateParams','$state','adminFactory',function($scope,$stateParams,$state,adminFactory){
		
		var id=$stateParams.id;
		activate();
		function activate(){
			adminFactory.getSingleNews(id)
			.then(function(response){
				$scope.x=response.data;
				console.log($scope.x);

			},function(error){
				console.log(error);
			});
		}
		
		$scope.doUpdate= function(x){
			adminFactory.updateNews(x)
			.then(function(response){
				alert("News detail have successfully updated");
				$state.go('admin.home');
			},function(error){
				console.log(error);
			});
		}
	}]);		