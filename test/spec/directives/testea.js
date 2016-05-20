'use strict';

describe('Directive: testea', function () {

  // load the directive's module
  beforeEach(module('studyYeomanAngularApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<testea></testea>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the testea directive');
  }));
});
