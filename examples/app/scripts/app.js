'use strict';

/**
 * @ngdoc overview
 * @name angularFontChartPagesApp
 * @description
 * # angularFontChartPagesApp
 *
 * Main module of the application.
 */
angular
  .module('angularFontChartPagesApp', [
    'ngRoute',
    'ngFontChart'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'bodyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
