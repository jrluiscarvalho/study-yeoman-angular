'use strict';

/**
 * @ngdoc overview
 * @name studyYeomanAngularApp
 * @description
 * # studyYeomanAngularApp
 *
 * Main module of the application.
 */
angular
  .module('studyYeomanAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/api-imdb',{
        templateUrl:'views/api-imdb.html',
        controller: 'ImdbCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
