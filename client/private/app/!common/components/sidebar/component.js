angular.module('app.components.header').component('appSidebar', {
  templateUrl: 'private/app/!common/components/sidebar/template.html',
  controller: function (Phones) {
    'use strict';

    this.phones = Phones.query();
  }
});