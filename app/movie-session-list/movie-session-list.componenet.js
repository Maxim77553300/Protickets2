'use strict';

// Register `movieSessionList` component, along with its associated controller and template
angular.
  module('movieSessionList').
  component('movieSessionList', {
    templateUrl: 'movie-session-list/movie-session-list.template.html',
    controller: ['MovieSession', 'authService', '$scope', 'orderFormService',
      function MovieListController(MovieSession, authService, $scope, orderFormService) {


          this.currentName = authService.getUserName();
          this.moviesessions = MovieSession.query();


       //   console.log('Number mmmmmmm ' + this.moviesession.id);

      }
    ]
  });