angular.module('app.pages.phone').factory('Phone', function ($resource) {
  'use strict';

  return $resource('private/data/phones/:id.json', {}, {
    get: {
      method: 'GET',
      cache: true
    }
  });
});