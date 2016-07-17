angular.module('collegeApp')
	.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

		$stateProvider
			.state('admin.login',{
				url : '/login',
				templateUrl : 'admin/view/adminLogin.html',
				controller : 'adminLoginCtrl'

			})
			.state('admin.home',{
				url : '/home',
				templateUrl : 'admin/view/home.html',
				controller : 'adminLoginCtrl'

			})
		.state('admin.addNews',{
				url : '/addNews',
				templateUrl : 'admin/view/addNews.html',
				controller : 'addNewsCtrl'

			})
		.state('admin.editNews',{
				url : '/editNews/:id',
				templateUrl : 'admin/view/editNews.html',
				controller : 'editNewsCtrl'

			})
		.state('admin.addTeacher',{
				url : '/addTeacher',
				templateUrl : 'admin/view/addTeacher.html',
				controller : 'addTeacherCtrl'

			})
		.state('admin.addEvent',{
				url : '/addEvent',
				templateUrl : 'admin/view/addEvent.html',
				controller : 'addEventCtrl'

			})
		.state('admin.addEventPhotos',{
				url : '/addEventPhotos/:id',
				templateUrl : 'admin/view/addEventPhotos.html',
				controller : 'addEventPhotosCtrl'

			})

		.state('admin.addCourse',{
				url : '/addCourse',
				templateUrl : 'admin/view/addCourse.html',
				controller : 'addEventCtrl'

			})
		.state('admin.news',{
				url : '/news',
				templateUrl : 'admin/view/news.html',
				controller : 'newsCtrl'

			})
		.state('admin.courses',{
				url : '/courses',
				templateUrl : 'admin/view/courses.html',
				controller : 'coursesCtrl'

			})
		.state('admin.teachers',{
				url : '/teachers',
				templateUrl : 'admin/view/teachers.html',
				controller : 'teachersCtrl'

			})
		.state('admin.events',{
				url : '/events',
				templateUrl : 'admin/view/events.html',
				controller : 'eventsCtrl'

			})
		.state('admin.editCourse',{
				url : '/editCourse/:course',
				templateUrl : 'admin/view/editCourse.html',
				controller : 'editCourseCtrl'

			})
		.state('admin.editTeacher',{
				url : '/editTeacher/:id',
				templateUrl : 'admin/view/editTeacher.html',
				controller : 'editTeacherCtrl'

			})
		.state('admin.editEvent',{
				url : '/editEvent/:id',
				templateUrl : 'admin/view/editEvent.html',
				controller : 'editEventCtrl'

			})
	}])
