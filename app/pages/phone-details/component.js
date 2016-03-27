angular.module('app.pages.phoneDetails').component('phoneDetails', {
  templateUrl: 'app/pages/phone-details/view.html',
  controller: function ($routeParams, AppPhones) {
    'use strict';

    var ctrl = this;

    this.phone = AppPhones.get({phoneId: $routeParams.phoneId}, function (phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    this.setImage = function (imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }
});