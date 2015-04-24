'use strict';

angular.module('weather')
  .controller('HomeCtrl', ['$scope', 'wunderground', '$location', function($scope, wunderground, $location) {

    $scope.getForecast = function(userInput) {
      wunderground.getForecast(userInput)
        .then(function() {
          $location.path('/forecast');
        });
    };
  }]);
