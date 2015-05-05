'use strict';

angular.module('weather', ['ngAnimate', 'ngRoute', 'ui.bootstrap'])
  .config(['$routeProvider', '$httpProvider',
    function($routeProvider, $httpProvider) {

      $httpProvider.defaults.useXDomain = true;
      delete $httpProvider.defaults.headers.common['X-Requested-With'],

        $routeProvider.when('/', {
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
    }]);
