angular.module('app.pages.phones').factory('Phones', function ($resource) {
  'use strict';

  return $resource('data/phones.json', {}, {
    query: {
      method: 'GET',
      isArray: true,
      cache: true
    }
  });
});