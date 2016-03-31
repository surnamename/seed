angular.module('app').factory('AppPhones', function ($resource) {
  'use strict';

  return $resource('data/phones/:id.json', {id: 'phones'}, {
    query: {
      method: 'GET',
      //params: {id: 'phones'},
      isArray: true,
      cache: true
    },
    get: {
      method: 'GET',
      cache: true
    }
  });
});