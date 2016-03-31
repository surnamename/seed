angular.module('app.pages.phoneDetails').component('phoneDetails', {
  templateUrl: 'app/pages/phone-details/template.html',
  controller: function ($stateParams, AppPhones) {
    'use strict';

    var ctrl = this;

    this.phone = AppPhones.get({id: $stateParams.id}, function (phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    this.setImage = function (imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }
});