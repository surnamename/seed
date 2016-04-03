describe('User Phone Component', function () {
  var component, $httpBackend;

  var xyzPhoneMock = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
  };

  beforeEach(module('app.user'));
  beforeEach(module('ngResource'));
  beforeEach(module('ui.router'));

  beforeEach(inject(function ($rootScope, $stateParams, _$componentController_, _$httpBackend_) {
    $stateParams.id = 'xyz';
    component = _$componentController_('userPhone', {$scope: $rootScope.$new(), $stateParams: $stateParams});

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/phones/xyz.json').respond(xyzPhoneMock);
  }));

  it('should fetch phone detail', function () {
    expect(angular.equals(component.phone, {})).toBe(true);
    $httpBackend.flush();

    expect(angular.equals(component.phone, xyzPhoneMock)).toBe(true);
  });
});