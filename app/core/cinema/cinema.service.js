'use strict';

angular.
  module('core.cinema').
  factory('Cinema', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/:cinemaId', {}, {
        query: {
          method: 'GET',
          params: {cinemaId: 'cinemas'},
          isArray: true,
        }
      });
      console.log(resource);
      return resource;
    }
  ]);