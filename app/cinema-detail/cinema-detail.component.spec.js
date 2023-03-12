'use strict';

describe('cinemaDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach(module('cinemaDetail'));

  // Test the controller
  describe('CinemaDetailController', function() {
    var $httpBackend, ctrl;
    var xyzCinemaData = {
      name: 'cinema xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('cinemas/xyz.json').respond(xyzCinemaData);

      $routeParams.cinemaId = 'xyz';

      ctrl = $componentController('cinemaDetail');
    }));

    it('should fetch the cinema details', function() {
      expect(ctrl.cinema).toBeUndefined();

      $httpBackend.flush();
      expect(ctrl.cinema).toEqual(xyzCinemaData);
    });

  });

});