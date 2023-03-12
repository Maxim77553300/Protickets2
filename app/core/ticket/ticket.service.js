'use strict';

  angular.
  module('core.ticket').
  factory('Ticket', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/:ticketId', {}, {
        query: {
          method: 'GET',
          params: {ticketId: 'tickets'},
          isArray: true,
        }
      });
      console.log('Ticket service ' + resource);
      return resource;
    }
  ]);
