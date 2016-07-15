angular.module('collegeApp')
	.config(['$urlRouterProvider','$stateProvider','$animateProvider',function($urlRouterProvider,$stateProvider,$animateProvider){
	
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
		.state('gallery',{
			url:'/gallery',
			views :{
				'top':{
							templateUrl:'guest/view/menu.html',
					},
				'bottom':{
						templateUrl:'guest/view/gallery.html',
						controller:'galleryCtrl',
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
							controller:'',
					
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
		$rootScope.serverUrl = 'http://localhost/tnraocollege/server/guest/';
		$rootScope.serverUrl1 = 'http://localhost/tnraocollege/server/admin/';
		
	}]);
