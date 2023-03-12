'use strict';

// Register `cinemaDetail` component, along with its associated controller and template
angular.
  module('cinemaDetail').
  component('cinemaDetail', {
    templateUrl: 'cinema-detail/cinema-detail.template.html',
    controller: ['$routeParams', 'Cinema',
      function CinemaDetailController($routeParams, Cinema) {
        var self = this;
        self.cinema = Cinema.get({cinemaId: $routeParams.cinemaId}, function(cinema) {
          self.setImage(cinema.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });