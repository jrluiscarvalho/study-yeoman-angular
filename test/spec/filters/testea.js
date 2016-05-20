'use strict';

describe('Filter: testea', function () {

  // load the filter's module
  beforeEach(module('studyYeomanAngularApp'));

  // initialize a new instance of the filter before each test
  var testea;
  beforeEach(inject(function ($filter) {
    testea = $filter('testea');
  }));

  it('should return the input prefixed with "testea filter:"', function () {
    var text = 'angularjs';
    expect(testea(text)).toBe('testea filter: ' + text);
  });

});
