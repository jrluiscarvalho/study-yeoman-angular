'use strict';

describe('Service: teste8', function () {

  // load the service's module
  beforeEach(module('studyYeomanAngularApp'));

  // instantiate service
  var teste8;
  beforeEach(inject(function (_teste8_) {
    teste8 = _teste8_;
  }));

  it('should do something', function () {
    expect(!!teste8).toBe(true);
  });

});
