angular.module('collegeApp')
.controller('galleryCtrl',['$scope','$state','$stateParams','$mdSidenav','$log',function($scope,$state,$stateParams,$mdSidenav,$log)
{
   $scope.openLeftMenu = function() {
   	console.log("openLeftMenu");
    $mdSidenav('right').toggle();
  };
}]);