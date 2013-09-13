'use strict';

describe('Service: annuaire', function () {

  // load the service's module
  beforeEach(module('censeurApp'));

  // instantiate service
  var annuaire;
  beforeEach(inject(function (_annuaire_) {
    annuaire = _annuaire_;
  }));

  it('should do something', function () {
    expect(!!annuaire).toBe(true);
  });

});
