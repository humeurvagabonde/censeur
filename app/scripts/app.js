'use strict';

angular.module('censeurApp', ['ngResource', 'ngRoute', 'ngAnimate', 'ui.route', 'ui.bootstrap','underscore', 'ajoslin.promise-tracker'])
  .config(function ($routeProvider) {

    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix('!');

    $routeProvider
      .when('/infos', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/carriere', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
			.when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/annuaire', {
        templateUrl: 'views/annuaire.html',
        controller: 'AnnuaireCtrl'
      })
      .otherwise({
        redirectTo: '/annuaire'
      });
  });
