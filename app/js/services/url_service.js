angular.module("app").factory('UrlService', function($http) {
  // these routes map to stubbed API endpoints in config/server.js
  return {
    loginUrl: function() {
      return '/login';
    },
    logoutUrl: function() {
      return '/logout';
    },
    booksUrl: function() {
      return '/books';
    }
  };
});
