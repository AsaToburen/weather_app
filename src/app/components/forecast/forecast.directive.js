'use strict';

angular.module('weather')
  .directive('forecast', function() {
    return {
      restrict: 'E',
      templateUrl: './app/components/forecast/forecast.partial.html',
      replace: true,
      scope: true
    };
  });
