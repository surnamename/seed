angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider, $ocLazyLoadProvider) {
  'use strict';

  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/phones');

  $stateProvider

    .state('phones', {
      //abstract: true,
      url: '/phones',
      views: {
        //'nav': {templateUrl: PATHS.templates.components + 'nav.html', controller: 'navCtrl as nav'},
        'content': {template: '<phones-list></phones-list>'}
        //'footer': {templateUrl: PATHS.templates.components + 'footer.html', controller: 'footerCtrl as footer'}
      }
    })

    .state('phones.id', {
      url: '/:id',
      views: {
        'content@': {template: '<phone-details></phone-details>'}
      }
    });



  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    modules: [
      {name: 'TestModule', files: ['js/TestModule.js']}
    ]
  });
});