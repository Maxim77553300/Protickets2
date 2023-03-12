'use strict';

  angular.
  module('loginForm').
  component('loginForm', {
    templateUrl: 'login-form/login-form.template.html',
    controller: ['Login', '$window', 'authService', '$rootScope', 
      function LoginFormController(Login,  $window, authService, $rootScope) {
        this.test = "Please, enter your username and password";        

         this.login = function(user) {
          this.user = user;
        console.log('Before ' + Object.values(user));


        Login.save({userName : user.userName, password : user.password}).$promise.then(function(data) {
          authService.setToken(data.token);
          authService.setUserName(user.userName);
          console.log('DATA   ' + Object.values(data));
    });



    this.currentName = authService.getUserName();

      }; 

      }
    ]
  });

