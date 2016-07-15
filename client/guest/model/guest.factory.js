angular.module('collegeApp')
	.factory('guestFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
		
			var obj = {};

			obj.getCourseDetails = function(course){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getCourseDetails.php?course="+course)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getAllCourses = function(){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getCourses.php")
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getNotification = function(){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getAllNotifications.php")
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getTeachersByCourse = function(course){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getTeachersByCourse.php?course="+course)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getHodByCourse = function(course){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getHodByCourse.php?course="+course)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getEvents = function(){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getEvents.php")
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			return obj;
	}])