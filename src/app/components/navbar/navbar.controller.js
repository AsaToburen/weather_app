'use strict';

angular.module('weather')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
