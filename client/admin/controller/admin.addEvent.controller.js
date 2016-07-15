angular.module('collegeApp')
	.controller('addEventCtrl',['$scope','$state','adminFactory','$rootScope',function($scope,$state,adminFactory,$rootScope){

		$scope.addEvent = function(x){
		x['date'] =x['eventDate'].getFullYear() + "/"+
						(x['eventDate'].getMonth()+1) + "/"+
						x['eventDate'].getDate();			
			
		adminFactory.addEvent(x)
		.then(function(response){

			alert("event has added");
			$scope.x=null;
			$state.go('admin.home');
			
		},function(error){
			console.error(error);
		})
	}

/*	$scope.action = $rootScope.serverUrl+'/server/admin/singleUpload.php?id='+$scope.eventId;
	$scope.mimeTypes = '.jpeg,.jpg';

	$scope.myCallBackMethod = function(reponse) {
		alert(response);
	}
*/

}])