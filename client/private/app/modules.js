angular.module('app', [
  'ngRoute',
  'ngResource',
  'ngAnimate',

  'ui.router',
  'oc.lazyLoad',

  'app.pages'
]);

angular.module('app.pages', [
  'app.pages.phones',
  'app.pages.phone'
]);

angular.module('app.pages.phones', []);
angular.module('app.pages.phone', []);