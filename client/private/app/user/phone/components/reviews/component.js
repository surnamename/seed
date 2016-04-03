angular.module('app.user.phone').component('userPhoneReviews', {
  templateUrl: 'private/app/user/phone/components/reviews/template.html',
  controller: function ($stateParams, Phones) {
    'use strict';

    this.phone = Phones.get({id: $stateParams.id});
  }
});