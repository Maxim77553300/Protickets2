'use strict';

  angular.
  module('core.register').
  factory('Register', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/users/register/ :user', {user : '@user'}, {
        save: {
          method: 'POST',
        }
      });
      return resource;
    }
  ]);


