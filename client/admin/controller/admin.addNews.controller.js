angular.module('collegeApp')
	.controller('addNewsCtrl', ['$scope','$state','adminFactory',function($scope,$state,adminFactory){
		
		$scope.doAddNews=function(x){
		x['date'] =x['fdate'].getFullYear() + "/"+
						(x['fdate'].getMonth()+1) + "/"+
						x['fdate'].getDate();			

			adminFactory.addNews(x)
			.then(function(response){

				alert("news has been submitted");
				$scope.x=null;
				$state.go('admin.home');
			},function(error){
				console.error("Error");
				console.error(error);
				alert("Sorry, news couldn't be added.");
			});	
		}
	}]);		