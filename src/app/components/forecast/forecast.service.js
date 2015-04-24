'use strict';

angular.module('weather')
  .factory('wunderground', function() {
    var shinyNewServiceInstance;
  // factory function body that constructs shinyNewServiceInstance
  return shinyNewServiceInstance;
  });



//http://api.wunderground.com/api/Your_Key/forecast10day/q

//var getWundergroundData = function (query) {
//    $.ajax({
//        url: "http://api.wunderground.com/api/a39ce963b264009b/geolookup/forecast10day/q/" + query + ".json",
//        dataType: "jsonp",
//        success: function(data) {
//            console.log(data);
//            parseWuData(data);
//            var location = data.location.lat + "," + data.location.lon;
//            getForcastApiData(location);
//            getHamWeatherData(location);
//            //getBackground(locationImg);
//        },
//        error: function() {
//            //Create Error Handler
//
//        }
//    });
//}
//
//
//var parseWuData = function(callback) {
//    console.log(callback);
//    var forecastArray = callback.forecast.simpleforecast.forecastday;
//    for (x = 0; j=forecastArray.length, x<j; x++) {
//        wuDataHighs.push(parseInt(forecastArray[x].high.fahrenheit));
//        wuDataLows.push(parseInt(forecastArray[x].low.fahrenheit));
//        iconUrls.push(callback.forecast.simpleforecast.forecastday[x].icon_url);
//    }
//    wuDataHighs = wuDataHighs.map(Number);
//    wuDataLows = wuDataLows.map(Number);
//}
