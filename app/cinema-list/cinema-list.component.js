'use strict';

// Register `cinemaList` component, along with its associated controller and template
angular.
  module('cinemaList').
  component('cinemaList', {
    templateUrl: 'cinema-list/cinema-list.template.html',
    controller: ['Cinema', 'authService',
      function CinemaListController(Cinema, authService) {
        var self = this;
        this.currentName = authService.getUserName();
        this.cinemas = Cinema.query();
        this.orderProp = 'age';
   //     console.log('My Cinema :' + Object.values(self.cinema));
      }
    ]
  });

  