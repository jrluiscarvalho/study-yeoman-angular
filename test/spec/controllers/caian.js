'use strict';

describe('Controller: CaianCtrl', function () {

  // load the controller's module
  beforeEach(module('studyYeomanAngularApp'));

  var CaianCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CaianCtrl = $controller('CaianCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CaianCtrl.awesomeThings.length).toBe(3);
  });
});
