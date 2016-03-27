angular.module('app').factory('AppPhones', function ($resource) {
  'use strict';

  return $resource('data/phones/:phoneId.json', {}, {
    query: {
      method: 'GET',
      params: {
        phoneId: 'phones'
      },
      isArray: true,
      cache: true
    },
    get: {
      method: 'GET',
      cache: true
    }
  });
});