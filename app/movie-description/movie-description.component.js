'use strict';

// Register `cinemaDetail` component, along with its associated controller and template
angular.
  module('movieDescription').
  component('movieDescription', {
    templateUrl: 'movie-description/movie-description.template.html',
    controller: ['$routeParams', 'Movie', 'authService', 'orderFormService',
      function MovieDescriptionController($routeParams, Movie, authService, orderFormService) {
        this.currentName = authService.getUserName();
        this.movieId = Number($routeParams.movieId - 1); 
        orderFormService.setMovieId(this.movieId);
        this.movies = Movie.query();          
      }
    ]
  });