angular.module('app.pages.phones').component('phones', {
  templateUrl: 'private/app/pages/phones/template-async.html',
  controller: function (Phones) {
    'use strict';

    this.phones = Phones.query();
    this.orderProp = 'age';
  }
});