angular.module('app.user.phones').component('userPhones', {
  templateUrl: 'private/app/user/phones/template.html',
  controller: function (Phones) {
    'use strict';

    this.phones = Phones.query();
    this.orderProp = 'age';
  }
});