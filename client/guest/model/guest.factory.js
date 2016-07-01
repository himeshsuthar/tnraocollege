angular.module('collegeApp')
	.factory('guestFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
		
			var obj = {};

			obj.getCourseDetails = function(x){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getCourseDetails.php?course="+x)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getAllCourses = function(){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getAllCourses.php")
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			return obj;
	}])