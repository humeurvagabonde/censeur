'use strict';

describe('Controller: AnnuairecontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('censeurApp'));

  var AnnuairecontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AnnuairecontrollerCtrl = $controller('AnnuairecontrollerCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
