describe('PhoneDetailCtrl', function () {
  var component, $httpBackend;

  var xyzPhoneMock = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
  };

  beforeEach(module('app'));

  beforeEach(inject(function ($rootScope, $routeParams, _$componentController_, _$httpBackend_) {
    $routeParams.phoneId = 'xyz';
    component = _$componentController_('phoneDetails', {$scope: $rootScope.$new()});

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/phones/xyz.json').respond(xyzPhoneMock);
  }));

  it('should fetch phone detail', function () {
    expect(angular.equals(component.phone, {})).toBe(true);
    $httpBackend.flush();

    expect(angular.equals(component.phone, xyzPhoneMock)).toBe(true);
  });
});