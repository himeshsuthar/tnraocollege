angular.module('collegeApp')
.factory('adminFactory',['$q','$http','$rootScope',function($q,$http,$rootScope){
	var obj ={};
	obj.login =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"login.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.addNews =function(x){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"addNews.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getNews =function(){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getNews.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getSingleNews =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getSingleNews.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.updateNews =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"updateNews.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.deleteNews =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"deleteNews.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getCourses =function(){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getCourses.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.addEvent =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"addEvent.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.getEvents =function(){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getEvents.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getEvent =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getEvent.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.updateEvent =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"updateEvent.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.deleteEvent =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"deleteEvent.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.addTeacher =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"addTeacher.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.addCourse =function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"addCourse.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getCoursesDetails = function(){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getCoursesDetails.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getCourseDetails = function(course){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getCourseDetails.php?course="+course)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.updateCourseDetails = function(x){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"updateCourseDetails.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.deleteCourse = function(id){

		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"deleteCourse.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getTeacher =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getTeacher.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.getTeachers =function(name){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"getTeachers.php")
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}

	obj.updateTeacher =function(x){
		  var defer = $q.defer();
			$http.post($rootScope.serverUrl1+"updateTeacher.php",x)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});
		return defer.promise;
	}
	obj.deleteTeacher =function(id){
		var defer = $q.defer();
		$http.post($rootScope.serverUrl1+"deleteTeacher.php?id="+id)
		.then(function(response){
			defer.resolve(response);
		},function(error){
			defer.reject(error);
		});

		return defer.promise;
	}

	return obj;
}])
