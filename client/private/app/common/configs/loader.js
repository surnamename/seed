angular.module('app').config(function ($ocLazyLoadProvider) {
  'use strict';

  $ocLazyLoadProvider.config({
    debug: true,
    events: true,
    modules: [
      {
        name: 'app.pages.phone',
        files: [
          'private/app/pages/phone-async/factories/resources/phone.js',
          'private/app/pages/phone-async/filters/checkmark.js',
          'private/app/pages/phone-async/animations/slider.js',
          'private/app/pages/phone-async/component.js'
        ]
      }
    ]
  });
});