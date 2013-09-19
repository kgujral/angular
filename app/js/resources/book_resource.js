angular.module("app").factory("BookResource", function($q, $resource, UrlService) {
  return $resource(UrlService.booksUrl());
});
