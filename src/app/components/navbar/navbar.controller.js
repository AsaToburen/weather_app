'use strict';

angular.module('weather')
  .controller('NavbarCtrl', ['$scope', 'wunderground', function($scope, wunderground) {
    $scope.date = new Date();

    

  }]);
