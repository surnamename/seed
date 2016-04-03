describe('Phones Resource Factory', function () {

  beforeEach(module('app.user'));
  beforeEach(module('ngResource'));

  it('check the existence', inject(function (Phones) {
    expect(Phones).toBeDefined();
  }));
});