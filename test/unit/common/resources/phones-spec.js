describe('Phones Resource Factory', function () {
  beforeEach(module('app'));

  it('check the existence', inject(function (AppPhones) {
    expect(AppPhones).toBeDefined();
  }));
});