angular.module("app").factory('AuthenticationService', function($http, UrlService) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    login: function(credentials) {
      return $http.post(UrlService.loginUrl(), credentials);
    },
    logout: function() {
      return $http.post(UrlService.logoutUrl());
    }
  };
});
