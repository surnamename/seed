angular.module('app.user.phone').component('userPhoneDescription', {
  templateUrl: 'private/app/user/phone/components/description/template.html',
  controller: function ($stateParams, Phones) {
    'use strict';

    this.phone = Phones.get({id: $stateParams.id});
  }
});