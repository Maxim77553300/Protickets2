'use strict';

  angular.
  module('core.order').
  factory('Order', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/orders/ :order', {order : '@order'}, {
        save: {
          method: 'POST',
        }
      });
      return resource;
    }
  ]);
