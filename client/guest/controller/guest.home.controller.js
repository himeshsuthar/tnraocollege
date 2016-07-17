angular.module('collegeApp')
	.controller('homeCtrl',['$scope','$state','$sce','guestFactory',function($scope,$state,$sce,guestFactory){

activate();
function activate(){

	guestFactory.getNotification()
	.then(function(response){
		$scope.feeds = response.data;
		/*console.log($scope.feeds);*/
	},function(error){
		console.error(error);
	});

$scope.contenthtml=function(x){
		return $sce.trustAsHtml(x);

	};
}

	}]);
