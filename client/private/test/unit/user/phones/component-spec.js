describe('User Phones Component', function () {
  var component, $httpBackend;

  beforeEach(module('app.user'));
  beforeEach(module('ngResource'));

  beforeEach(inject(function ($rootScope, _$componentController_, _$httpBackend_) {
    component = _$componentController_('userPhones', {$scope: $rootScope.$new()});

    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/phones.json').respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function () {
    expect(angular.equals(component.phones, [])).toBe(true);
    $httpBackend.flush();

    expect(angular.equals(component.phones, [{name: 'Nexus S'}, {name: 'Motorola DROID'}])).toBe(true);
  });

  it('should set the default value of orderProp model', function () {
    expect(component.orderProp).toBe('age');
  });
});