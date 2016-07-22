angular.module('collegeApp')
	.config(['$urlRouterProvider','$stateProvider','$httpProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$httpProvider,$animateProvider){
	$httpProvider.defaults.headers.post["Content-Type"] = 'text/plain';
	$stateProvider
		.state('home',{
			url:'/',
			views:{
					'top':{
							templateUrl:'guest/view/menu.html',
					},
					'bottom':{
							templateUrl:'guest/view/home.html',
							controller:'homeCtrl',

					}
			}
		})
		.state('course',{
			url:'/course',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom':{
						templateUrl:'guest/view/courseMenu.html',
						controller:'courseMenuCtrl',
				}
			}
		})
		.state('courseDetails',{
			url:'/course/:course',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom' :{
				templateUrl:'guest/view/courseDetails.html',
				controller:'courseCtrl',

				}
			}
		})
		.state('events',{
			url:'/events',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom':{
						templateUrl:'guest/view/events.html',
						controller:'guestEventsCtrl',
				}
			}
		})
		.state('eventDetails',{
			url:'/events/:id',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom':{
						templateUrl:'guest/view/gallery.html',
						controller:'guestEventDetailsCtrl',
				}
			}
		})
		.state('infrastructure',{
			url:'/infrastructure',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom' :{
				templateUrl:'guest/view/infrastructure.html',
				/*controller:'courseCtrl',*/

				}
			}
		})
		.state('contactUs',{
			url:'/contactUs',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom' :{
							templateUrl:'guest/view/contactUs.html',
							controller:'contactUsCtrl',

				}
			}
		})
		.state('about',{
			url:'/about',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom' :{
							templateUrl:'guest/view/about.html'
				}
			}
		})

		.state('achievement',{
			url:'/achievement',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom' :{
							templateUrl:'guest/view/acheivement.html'
				}
			}
		})


		.state('admin',{
			url:'/admin',
			views :{
				'top':{
					templateUrl :"admin/view/header.html",

				},
				'bottom' :{
					template:"<div ui-view></div>"

				}
			}

		})


		$urlRouterProvider.otherwise('/');

	}])
	.run(['$rootScope',function($rootScope){
		$rootScope.serverUrl = 'http://localhost/myCollege/tnraocollege/server/guest/';
		$rootScope.serverUrl1 = 'http://localhost/myCollege/tnraocollege/server/admin/';

	}]);
