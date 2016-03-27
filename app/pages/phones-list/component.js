angular.module('app.pages.phonesList').component('phonesList', {
  templateUrl: 'app/pages/phones-list/view.html',
  controller: function (AppPhones) {
    'use strict';

    this.phones = AppPhones.query();
    this.orderProp = 'age';
  }
});