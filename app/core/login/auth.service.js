'use strict';

angular.
  module('core.login')
  .service('authService', authService)
function authService($window) {
    return {
        getToken: function() {
            return $window.localStorage.getItem('jwt-token');
            
        },
        setToken: function(token) {
            $window.localStorage.setItem('jwt-token', token);
        },
        setUserName: function(userName) {
            $window.localStorage.setItem('current-user-name', userName);
        }, 
        getUserName: function() {
            return $window.localStorage.getItem('current-user-name');
        },
        getUserId: function() {
            return $window.localStorage.getItem('user-id');
        }
    }
}