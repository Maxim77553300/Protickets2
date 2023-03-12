'use strict';

angular.
  module('core.login').
  factory('Login', ['$resource',
    function($resource) {
      var resource = $resource('http://localhost:8080/api/v1/users/login/ :token', {token : '@token'}, {
        }, {
          save: {method: 'POST'},
       //   Interceptor : interceptor
        } );    

       // resource = interceptor.wrapActions( Object.values(resource), ["query", "update"] );
       // console.log('resource---' + resource);  


      return resource;
      }
    ]);

