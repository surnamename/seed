angular.module('app.pages.phone').component('phone', {
  templateUrl: 'private/app/pages/phone-async/template.html',
  controller: function ($stateParams, Phone) {
    'use strict';

    var ctrl = this;

    this.phone = Phone.get({id: $stateParams.id}, function (phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    this.setImage = function (imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }
});