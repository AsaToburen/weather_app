'use strict';

angular.module('weather', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.view.html',
        controller: 'HomeCtrl'
      })
      .when('/forecast', {
        templateUrl: 'app/views/forecast.view.html',
        controller: 'ForecastCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
