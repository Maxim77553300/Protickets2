angular.
 module('core.login').
 factory('interceptor', ["$injector", function ( $injector) {
        return {
            request: function (config) {
                var authServiceToken = $injector.get("authService").getToken();

                console.log( 'Token: '  + authServiceToken)

                if(authServiceToken) {
                    config.headers.Authorization = 'Bearer_' + authServiceToken;
                }
                console.log( 'Header: ' + Object.values(config.headers))

              // console.log('header -- ' +  $window.localStorage.get("token"));
                return config;
            }
        
        }
    }]);

