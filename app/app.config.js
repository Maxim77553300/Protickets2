'use strict';

angular.
  module('protickets2App').
  config(['$routeProvider', 
    function config($routeProvider) {
      $routeProvider.
        when('/cinemas', {
          template: '<cinema-list></cinema-list>'
        }).
        when('/cinemas/:cinemaId', {
          template: '<cinema-detail></cinema-detail>'
        }).
        when('/movies', {
          template: '<movie-list><movie-list>',
          component: 'movieList'
        }).
        when('/movies/:movieId' , {
          template: '<movie-description></movie-description>'
        }).
        when('/users/register' , {
          template: '<register-form></register-form>'
        }).
        when('/users/login' , {
          template: '<login-form><login-form>'
        }).
        when('/tickets' , {
          template: '<ticket-order></ticket-order>'
        }).
        when('/orders' , {
          template: '<order-user></order-user>'
        }).
        when('/moviesessions' , {
          template: '<movie-session-list></movie-session-list>'
        }).
       otherwise(function ($injector) {
        var state = $injector.get('$state');
        if(state.href(state.current.name)) {
            state.go(state.current.name);
        } else {
            state.go('/cinemas');
        }    
    })}
  ]);

 angular.module('protickets2App').config(['$httpProvider', function ($httpProvider) {
   $httpProvider.interceptors.push('interceptor');
}]);

//angular.module('protickets2App').config('$httpProvider', function($httpProvider){
//  $httpProvider.interceptors.push('ResourceInterceptor');
//});




