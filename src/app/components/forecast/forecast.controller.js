'use strict';

angular.module('weather')
.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
})
  .controller('ForecastCtrl', ['$scope', 'wunderground', function($scope, wunderground){
  $scope.Forecast = wunderground.forecastData;
}]);