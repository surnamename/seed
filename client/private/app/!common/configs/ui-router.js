angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
  'use strict';

  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/user/phones');
  $urlRouterProvider.when('/user/pages/phones/{id}', '/user/pages/phones/{id}/description');

  $stateProvider

    .state('app', {
      abstract: true,
      url: '/',
      views: {
        'header': {template: '<app-header></app-header>'},
        'footer': {template: '<app-footer></app-footer>'}
      }
    })

    .state('app.admin', {
      abstract: true,
      url: 'admin',
      resolve: {
        loadAdminModule: function ($ocLazyLoad) {
          return $ocLazyLoad.load('app.admin');
        }
      }
    })

    .state('app.admin.settings', {
      url: '/settings',
      views: {
        'full-content@': {template: '<admin-settings></admin-settings>'}
      }
    })

    .state('app.user', {
      abstract: true,
      url: 'user'
    })

    .state('app.user.phones', {
      url: '/phones',
      views: {
        'full-content@': {template: '<user-phones></user-phones>'}
      }
    })

    .state('app.user.pages', {
      url: '/pages',
      views: {
        'pages-content@': {template: '<app-sidebar></app-sidebar>'},
        'footer@': {}
      }
    })

    .state('app.user.pages.phones', {
      abstract: true,
      url: '/phones',
      views: {
        'pages-content@': {template: '<app-sidebar></app-sidebar>'}
      }
    })

    .state('app.user.pages.phones.id', {
      url: '/:id',
      views: {
        'content': {template: '<user-phone></user-phone>'}
      }
    })

    .state('app.user.pages.phones.id.description', {
      url: '/description',
      views: {
        'content-tab': {template: '<user-phone-description></user-phone-description>'}
      }
    })

    .state('app.user.pages.phones.id.characteristics', {
      url: '/characteristics',
      views: {
        'content-tab': {template: '<user-phone-characteristics></user-phone-characteristics>'}
      }
    })

    .state('app.user.pages.phones.id.reviews', {
      url: '/reviews',
      views: {
        'content-tab': {template: '<user-phone-reviews></user-phone-reviews>'}
      }
    });
});