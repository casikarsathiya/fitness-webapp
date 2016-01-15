// Declare app level module which depends on views, and components
angular.module('myApp',
		[ 'ngRoute', 'myApp.view1', 'myApp.view2', 'myApp.version' ]).config(
		[ '$routeProvider', function($routeProvider) {
			$routeProvider.otherwise({
				redirectTo : '/view1'
			});
		} ])

.controller('myAppCtrl', ["$scope","$location",function($scope,$location) {
    $scope.name = "Hi Tabata";
    $scope.path = $location.path();
    var element = document.getElementById('slider1_container');
    $scope.setHealthStoreClick = function ()
    {
    	$scope.healthStoreClick = true;
    	$scope.beautyStoreClick = false;
    }
    
    $scope.setBeautyStoreClick = function ()
    {
    	$scope.healthStoreClick = false;
    	$scope.beautyStoreClick = true;
    }
  
}]);