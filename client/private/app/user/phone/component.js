angular.module('app.user.phone').component('userPhone', {
  templateUrl: 'private/app/user/phone/template-async.html',
  controller: function ($stateParams, Phones) {
    'use strict';

    var ctrl = this;

    this.phone = Phones.get({id: $stateParams.id}, function (phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    this.setImage = function (imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }
});