angular.module('app.user.phone').component('userPhoneCharacteristics', {
  templateUrl: 'private/app/user/phone/components/characteristics/template.html',
  controller: function ($stateParams, Phones) {
    'use strict';

    this.phone = Phones.get({id: $stateParams.id});
  }
});