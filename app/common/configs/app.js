angular.module('app').config(function ($routeProvider) {
  'use strict';

  $routeProvider
    .when('/phones', {template: '<phones-list></phones-list>'})
    .when('/phones/:phoneId', {template: '<phone-details></phone-details>'})
    .otherwise({redirectTo: '/phones'});
});