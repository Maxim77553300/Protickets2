'use strict';

// Register `movieList` component, along with its associated controller and template
angular.
  module('movieList').
  component('movieList', {
    templateUrl: 'movie-list/movie-list.template.html',
    controller: ['Movie', 'authService', '$scope',
      function MovieListController(Movie, authService, $scope) {

          this.currentName = authService.getUserName();
          this.movies = Movie.query();

          this.orderProp = 'age';

      }
    ]
  });
