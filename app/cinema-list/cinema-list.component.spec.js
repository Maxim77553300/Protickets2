'use strict';

describe('cinemaList', function() {

  // Load the module that contains the `cinemaList` component before each test
  beforeEach(module('cinemaList'));

  // Test the controller
  describe('CinemaListController', function() {
    var $httpBackend, ctrl;

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service and assign it to a variable with the same name
    // as the service while avoiding a name conflict.
    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('cinemas/cinemas.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('cinemaList');
    }));

    it('should create a `cinemas` property with 2 phones fetched with `$http`', function() {
      expect(ctrl.cinemas).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.cinemas).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
