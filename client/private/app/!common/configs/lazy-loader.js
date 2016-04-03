angular.module('app').config(function ($ocLazyLoadProvider) {
  'use strict';

  $ocLazyLoadProvider.config({
    debug: false,
    events: false,
    modules: [
      {
        name: 'app.admin',
        insertBefore: '#loader',
        files: [
          'private/app/admin-async/settings/component.js'
        ]
      }
    ]
  });
});