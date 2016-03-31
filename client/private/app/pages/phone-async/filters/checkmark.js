angular.module('app.pages.phone').filter('checkmark', function () {
  'use strict';

  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});