angular.module('app', [
  'ngRoute',
  'ngResource',
  'ngAnimate',

  'ui.router',
  'oc.lazyLoad',

  'app.components',
  'app.admin',
  'app.user'
]);

angular.module('app.components', ['app.components.header', 'app.components.sidebar', 'app.components.footer']);
angular.module('app.components.header', []);
angular.module('app.components.sidebar', []);
angular.module('app.components.footer', []);

angular.module('app.admin', ['app.admin.settings']);
angular.module('app.admin.settings', []);

angular.module('app.user', ['app.user.phones', 'app.user.phone']);
angular.module('app.user.phones', []);
angular.module('app.user.phone', []);