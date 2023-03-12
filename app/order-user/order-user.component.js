'use strict';

  angular.
  module('orderUser').
  component('orderUser', {
    templateUrl: 'order-user/order-user.template.html',
    controller: ['Order', 'orderFormService', 'authService',
      function OrderUserController(Order, orderFormService, authService) {
        var self = this;
        self.greeting = "Press 'submit to buy this ticket'";
        this.ticket = orderFormService.getTicket();
        this.currentName = authService.getUserName();
        
     //   this.ticketId = Number($routeParams.ticketId); 

         this.saveOrder = function(ticket) {
          
          if(this.ticket.ticketStatus === 'FREE_PLACE') {
          console.log('Before ' + Object.values(this.ticket.id) + authService.getToken());
          Order.save({ticketId : this.ticket.id, tokenValue : authService.getToken()}, function() {
            console.log('Save' + authService.getToken() );
            self.greeting = authService.getUserName() + ' !! Your order is accepted! Thank you for your purchase!';
          });

        } else {
           self.greeting = 'Error! Please try again to chose ticket! This number seat is busy or incorrect - please select a seat with status -FREE_PLACE- ';
        }
          }; 

      }
    ]
  });