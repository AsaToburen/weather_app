'use strict';

angular.module('weather')
  .directive('videoback', function() {
    return {
      restrict: 'E',
      templateUrl: './app/components/video/video.partial.html',
      replace: true,
      scope: true
    };
  });