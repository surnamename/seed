angular.module('app').factory('Phone', function ($resource) {
  'use strict';

  return $resource('private/data/phones/:id.json', {}, {
    get: {
      method: 'GET',
      cache: true
    }
  });
});