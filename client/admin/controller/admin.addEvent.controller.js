angular.module('collegeApp')
	.controller('addEventCtrl',['$scope','$state','adminFactory','$rootScope',function($scope,$state,adminFactory,$rootScope){
	

		$scope.addEvent = function(eventName,x){
			console.log($scope.eventName);
		adminFactory.addEvent(x)
		.then(function(response){
			$scope.x=null;
			$state.go('admin.home');
			//console.log($scope.courses);
		},function(error){
			console.error(error);
		})
	}

	$scope.action = $rootScope.serverUrl+'/server/admin/singleUpload.php?id='+$scope.eventId;
	$scope.mimeTypes = '.jpeg,.jpg';

	$scope.myCallBackMethod = function(reponse) {
		alert(response);
	}


}])