describe('Checkmark Filter', function() {
  beforeEach(module('app.user.phone'));

  describe('checkmark', function() {
    it('should convert boolean values to unicode checkmark or cross', inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    }));
  });
});