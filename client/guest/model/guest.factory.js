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
			obj.getHods = function(course){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getHods.php")
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
			obj.getEvent = function(id){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getEvent.php?id="+id)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.getEventPhotos = function(id){
				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"getEventPhotos.php?id="+id)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			obj.addInquiry = function(x){

				var defer = $q.defer();
				$http.get($rootScope.serverUrl+"addInquiry.php",x)
				.then(function(response){
					defer.resolve(response);
				},function(error){
					defer.reject(error);
				});
				return defer.promise;
			}
			return obj;
	}])
