'use strict';

angular.module('weather')
  .directive('home', function(){
   return {
      restrict: 'E',
      templateUrl: './app/components/home/home.partial.html',
      replace: true,
      scope: true
    };
  });