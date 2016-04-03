angular.module('app.user.phone').filter('checkmark', function () {
  'use strict';

  return function (input) {
    return input ? '\u2713' : '\u2718';
  };
});