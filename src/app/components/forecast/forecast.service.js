'use strict';

angular.module('weather')
  .factory('wunderground', ['$http', '$q', function($http, $q) {

    var weather = {

      wundEndpoint: 'http://api.wunderground.com/api/',
      forecastData: {},

      getForecast: function(userInput) {

        var deferred = $q.defer();

        var req = $http.get("http://api.aerisapi.com/forecasts/"+ userInput +"?&client_id=6dC6rxKzfhRryQAf3pdKb&client_secret=BK8JefbKY4sWeANiJzNkfIBIrp5PltTtnQMVl2Pm");

        req.success(function(data) {
          var weatherData = data;

          deferred.resolve(data);

          var coordinates = [data.response[0].loc.long, data.response[0].loc.lat];
          var string = coordinates.join();

          console.log(string);

          weather.parseData(data);
          weather.getLocationData(string);
        });
        return deferred.promise;
      },

      getLocationData: function(coordinates){
        console.log(coordinates);

        var deferred = $q.defer();

        var req = $http.jsonp("http://api.aerisapi.com/forecasts/closest?p=" + coordinates + "&limit=7&client_id=6dC6rxKzfhRryQAf3pdKb&client_secret=BK8JefbKY4sWeANiJzNkfIBIrp5PltTtnQMVl2Pm");

        req.success(function(data) {
          console.log(data);

          deferred.resolve(data);
        });
        return deferred.promise;
      },

      parseData: function(data){
        console.log(data);
        weather.forecastData = data.response[0].periods;
      }
    };
    return weather;

  }]);

