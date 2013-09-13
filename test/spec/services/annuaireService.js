'use strict';

describe('Service: annuaireService', function () {

  // load the service's module
  beforeEach(module('censeurApp'));

  // instantiate service
  var annuaireService;
  beforeEach(inject(function (_annuaireService_) {
    annuaireService = _annuaireService_;
  }));

  it('should do something', function () {
    expect(!!annuaireService).toBe(true);
  });

});
