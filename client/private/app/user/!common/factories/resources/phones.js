angular.module('app.user').factory('Phones', function ($resource) {
  'use strict';

  return $resource('data/phones/:id.json', {}, {
    query: {
      method: 'GET',
      isArray: true,
      cache: true
    },
    get: {
      method: 'GET',
      cache: true
    }
  });
});