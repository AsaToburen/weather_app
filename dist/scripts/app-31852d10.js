"use strict";angular.module("weather",["ngAnimate","ngRoute","ui.bootstrap"]).config(["$routeProvider","$httpProvider",function(e,a){a.defaults.useXDomain=!0,delete a.defaults.headers.common["X-Requested-With"],e.when("/",{templateUrl:"app/views/home.view.html",controller:"HomeCtrl"}).when("/forecast",{templateUrl:"app/views/forecast.view.html",controller:"ForecastCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("weather").directive("videoback",function(){return{restrict:"E",templateUrl:"./app/components/video/video.partial.html",replace:!0,scope:!0}}),angular.module("weather").directive("navbar",function(){return{restrict:"E",templateUrl:"./app/components/navbar/navbar.partial.html",replace:!0,scope:!0}}),angular.module("weather").controller("NavbarCtrl",["$scope","wunderground",function(e){e.date=new Date}]),angular.module("weather").directive("home",function(){return{restrict:"E",templateUrl:"./app/components/home/home.partial.html",replace:!0,scope:!0}}),angular.module("weather").controller("HomeCtrl",["$scope","wunderground","$location",function(e,a,t){e.getForecast=function(e){a.getForecast(e).then(function(){t.path("/forecast")})}}]),angular.module("weather").factory("wunderground",["$http","$q",function(e,a){var t={wundEndpoint:"http://api.wunderground.com/api/",forecastData:{},getForecast:function(o){var r=a.defer(),n=e.get("http://api.aerisapi.com/forecasts/"+o+"?fields=periods.timestamp,periods.minTempF,periods.weather,periods.icon,periods.maxTempF,loc.lat,loc.long,&limit=10&client_id=6dC6rxKzfhRryQAf3pdKb&client_secret=BK8JefbKY4sWeANiJzNkfIBIrp5PltTtnQMVl2Pm");return n.success(function(e){console.log(e),r.resolve(e);var a=[e.response[0].loc["long"],e.response[0].loc.lat],o=a.join();console.log(o),t.parseData(e),t.getLocationData(o)}),r.promise},getLocationData:function(t){console.log(t);var o=a.defer(),r=e.get("http://api.aerisapi.com/forecasts/closest?p="+t+"&client_id=6dC6rxKzfhRryQAf3pdKb&client_secret=BK8JefbKY4sWeANiJzNkfIBIrp5PltTtnQMVl2Pm");return r.success(function(e){console.log(e),o.resolve(e)}),o.promise},parseData:function(e){console.log(e),t.forecastData=e.response[0].periods}};return t}]),angular.module("weather").directive("forecast",function(){return{restrict:"E",templateUrl:"./app/components/forecast/forecast.partial.html",replace:!0,scope:!0}}),angular.module("weather").controller("ForecastCtrl",["$scope","$location","wunderground",function(e,a,t){e.Forecast=t.forecastData}]),angular.module("weather").run(["$templateCache",function(e){e.put("app/views/forecast.view.html","<navbar></navbar><videoback></videoback><forecast></forecast>"),e.put("app/views/home.view.html","<navbar></navbar><videoback></videoback><home></home>"),e.put("app/components/forecast/forecast.partial.html",'<div class="container tenday"><div class="jumbotron text-center"><h2 class="row">10 Day Forecast</h2><div class="row"><div class="col-md-1" ng-repeat="day in Forecast"><img ng-src="assets/images/{{day.icon}}" alt=""> <span>{{day.weather}}</span> <span>{{day.maxTempF}}</span> <span>{{day.minTempF}}</span></div></div></div></div>'),e.put("app/components/home/home.partial.html",'<div class="container"><div class="container text-center"><div class="container search"><h2>Find your local forecast</h2><form class="form-inline" name="locationForm" ng-submit="getForecast(userInput)" role="form"><div class="form-group"><label for="location">Location:</label> <input type="location" ng-model="userInput" class="form-control" id="location"></div><button type="submit" id="submit" value="Submit" class="btn btn-primary">Submit</button></form></div></div></div>'),e.put("app/components/navbar/navbar.partial.html",'<nav class="navbar navbar-static-top navbar-inverse" ng-controller="NavbarCtrl"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Weather Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li><a ng-href="#/home">Home</a></li><li><a ng-href="#/forecast">Forecast</a></li></ul><ul class="nav navbar-nav navbar-right"><li>Current date: {{ date | date:\'yyyy-MM-dd\' }}</li></ul></div></div></nav>'),e.put("app/components/video/video.partial.html",'<video autoplay="" loop="" muted="" id="video-bg"><source src="assets/video/glaciartopp.webm" type="video/webm"><source src="assets/video/glaciartopp.mp4" type="video/mp4"></video>')}]);