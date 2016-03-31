angular.module('app.pages.phoneDetails').filter('checkmark', function () {
  'use strict';

  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});