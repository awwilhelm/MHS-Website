'use strict';

/**
 * @ngdoc overview
 * @name mhsWebsiteApp
 * @description
 * # mhsWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('mhsWebsiteApp', [
    'ngAnimate',
    'ngAria',
    'ngMessages',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
