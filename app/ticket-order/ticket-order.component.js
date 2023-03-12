'use strict';

angular.
  module('ticketOrder').
  component('ticketOrder', {
    templateUrl: 'ticket-order/ticket-order.template.html',
    controller: ['Ticket', 'authService', 'orderFormService', 
      function TicketListController(Ticket, authService, orderFormService) {

         this.setTicket = function(ticket) {
           
            
            this.ticketId = ticket.id;
            orderFormService.setTicket(ticket);
            this.userId = authService.getUserId();
            this.movieId = orderFormService.getMovieId();

            console.log('After ticketId ' + ticket.id); 
            console.log('Movie session ---'  + ticket.movieSessionId);
            console.log('ScopePrice ' + ticket.id);
            console.log('Movie Id in List' + this.movieId);

          //  orderUser.saveOrder(this.ticketId);
          console.log('Ticket controller Token ' + Object.values(orderFormService.getTicket()));
         }



          this.currentName = authService.getUserName();
          this.tickets = Ticket.query();

      }
    ]
  });
