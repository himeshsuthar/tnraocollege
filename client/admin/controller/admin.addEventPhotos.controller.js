angular.module('collegeApp')
.controller('addEventPhotosCtrl',['$scope','$state','adminFactory','$stateParams','$rootScope',function($scope,$state,adminFactory,$stateParams,$rootScope){
	$scope.eventId = $stateParams.id;

	$scope.action = $rootScope.serverUrl1+'/singleUpload.php?id='+$scope.eventId;
	$scope.mimeTypes = '.jpeg,.jpg';
	activate($scope.eventId);
	$scope.goTo = function(x){
		$state.go(x);
	}


	function activate(){
		adminFactory.getEvent($scope.eventId).then(function (response) {
			$scope.event = response.data; 
	    	

		
		},function (err) {
			 alert("There is some error. Please try later.");
			 console.log(err); 
		})
	}

	$scope.myCallBackMethod = function(reponse) {
		alert(response);
	}


	
}]);
