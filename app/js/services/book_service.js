angular.module("app").factory("BookService", function($q, $http, UrlService) {

  var getBooks = function() {
    return $http.get(UrlService.booksUrl());
  };

  return { getBooks: getBooks };
});
