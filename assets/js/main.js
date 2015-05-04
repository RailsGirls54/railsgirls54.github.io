$(function () {
	$('body').scrollspy({
		target: '#navbar'
	});
	$("#navbar li a[href^='#']").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
		}, 300);
		$(this).parents('.collapse').collapse('hide');
	});
});

(function () {
	var app = angular.module('rg54', []);

	// controller
	app.controller('eventCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/data/events.json')
			.success(function (data) {
				$scope.events = data;
			});
    }]);
	app.controller('teamCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/data/team.json')
			.success(function (data) {
				$scope.team = data;
			});
    }]);
	app.controller('supporterCtrl', ['$scope', '$http', function ($scope, $http) {
		$http.get('/data/supporters.json')
			.success(function (data) {
				$scope.supporters = data;
			});
    }]);

	// directives
	app.directive('about', function () {
		return {
			restrict: 'A',
			templateUrl: '/templates/about.html'
		};
	});
	app.directive('events', function () {
		return {
			restrict: 'A',
			templateUrl: '/templates/events.html'
		};
	});
	app.directive('program', function () {
		return {
			restrict: 'A',
			templateUrl: '/templates/program.html'
		};
	});
	app.directive('team', function () {
		return {
			restrict: 'A',
			templateUrl: '/templates/team.html'
		};
	});
	app.directive('supporter', function () {
		return {
			restrict: 'A',
			templateUrl: '/templates/supporter.html'
		};
	});

})();