'use strict';

angular.module('weather')
  .controller('ForecastCtrl', ['$scope', '$location', 'wunderground',
    function($scope, $location, wunderground) {

      $scope.Forecast = wunderground.forecastData;
      
    }
  ]);
