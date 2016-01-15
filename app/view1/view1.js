'use strict';

angular.module('myApp.view1', [ 'ngRoute' ])

.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/view1', {
		templateUrl : 'view1/view1.html',
		controller : 'View1Ctrl'
	});
} ])

.controller('View1Ctrl', [ "$scope", "$location", function($scope, $location) {
	$scope.products = [ {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	}, {
		url : "../../node_modules/image/sample.jpg",
		name : "Natio Maximum Razor Relief Healing Lotion",
		price : "740"
	} ]
	$location.path('/view1');
} ]);