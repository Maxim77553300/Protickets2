'use strict';

  angular.
  module('registerForm').
  component('registerForm', {
    templateUrl: 'register-form/register-form.template.html',
    controller: ['Register',
      function RegisterFormController(Register) {
        this.greeting = "Nice to meet you! Fill these gaps please!";
        
        this.register = function(user) {
            this.user = user;
          console.log('Before ' + Object.values(user));
          Register.save({userName : user.userName,firstName : user.firstName,lastName : user.lastName, phone : user.phone, email : user.email,password : user.password}, function(user) {
            console.log('Save' + user);
          });
        }; 

      }
    ]
  });