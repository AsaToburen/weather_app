'use strict';

angular.module('weather')
  .controller('ForecastCtrl', ['$scope', 'wunderground', function($scope, wunderground){
  $scope.Forecast = wunderground.forecastData;
}]);