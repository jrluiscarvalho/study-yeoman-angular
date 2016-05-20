'use strict';

describe('Service: teste0', function () {

  // load the service's module
  beforeEach(module('studyYeomanAngularApp'));

  // instantiate service
  var teste0;
  beforeEach(inject(function (_teste0_) {
    teste0 = _teste0_;
  }));

  it('should do something', function () {
    expect(!!teste0).toBe(true);
  });

});
