angular.module('collegeApp')
.controller('contactUsCtrl',['$scope','$state','guestFactory',function($scope,$state,guestFactory){

$scope.addInquiry=function(x){
  console.log(x);
  guestFactory.addInquiry(x)
  
  .then(function(response){
    alert("your query has received ,we will contact you soon ");
    $scope.x=null;
  },function(error){
    console.log(error);
  })
}

	}]);
