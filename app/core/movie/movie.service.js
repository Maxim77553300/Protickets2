'use strict';

angular.
  module('core.movie').
  factory('Movie', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/:movieId', {}, {
        query: {
          method: 'GET',
          params: {movieId: 'movies'},
          isArray: true,
        }
      });
      setTimeout(function() {
        console.log('jjjjjjjjjjjj' + resource);
      }, 2000)
      
      return resource;
    }
  ]);