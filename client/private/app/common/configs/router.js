angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'use strict';

  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/phones');

  $stateProvider

    .state('phones', {
      //abstract: true,
      url: '/phones',
      views: {
        //'nav': {templateUrl: PATHS.templates.components + 'nav.html', controller: 'navCtrl as nav'},
        'content': {template: '<phones></phones>'}
        //'footer': {templateUrl: PATHS.templates.components + 'footer.html', controller: 'footerCtrl as footer'}
      }
    })

    .state('phones.id', {
      url: '/:id',
      views: {
        'content@': {template: '<phone></phone>'}
      },
      resolve: {
        loadMyCtrl: function ($ocLazyLoad) {
          return $ocLazyLoad.load('app.pages.phone');
        }
      }
    });
});