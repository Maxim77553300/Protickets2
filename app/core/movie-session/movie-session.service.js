'use strict';

angular.
  module('core.movie-session').
  factory('MovieSession', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/:moviesessionId', {}, {
        query: {
          method: 'GET',
          params: {moviesessionId: 'moviesessions'},
          isArray: true,
        }
      });
      setTimeout(function() {
        console.log('MovieSession Service :' + resource);
      }, 2000)
      
      return resource;
    }
  ]);