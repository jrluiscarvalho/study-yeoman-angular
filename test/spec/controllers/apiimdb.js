'use strict';

describe('Controller: ApiimdbctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('studyYeomanAngularApp'));

  var ApiimdbctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiimdbctrlCtrl = $controller('ApiimdbctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ApiimdbctrlCtrl.awesomeThings.length).toBe(3);
  });
});
