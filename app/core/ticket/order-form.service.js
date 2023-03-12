'use strict';

angular.
  module('core.ticket')
  .service('orderFormService', orderFormService)
function orderFormService () {
    this.userId;
    this.ticket;
    this.cinema;
    this.movieId;
    return {
        getTicket: function() {
            return this.ticket;            
        },
        setTicket: function(ticket) {
            console.log('orderFormService ' + ticket);
            this.ticket = ticket;
            
        },
        setUserId: function(userId) {
            this.userId = userId;
        }, 
        getUserId: function() {
            return this.userId;
        },
        setCinema: function(cinema) {
          this.cinema = cinema;
        },
        getCinema: function() {
          return this.cinema;
        },
        setMovieId: function(movieId) {
          this.movieId = movieId;
        },
        getMovieId: function() {
          return this.movieId;
        }

    }
}