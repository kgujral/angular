describe("service: UrlService", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($http, UrlService) {
    this.urlService = UrlService;
  }));

  describe("login url", function() {
    it("should return /login", function() {
      expect(this.urlService.loginUrl()).toEqual('/login');
    });
  });

  describe("logout url", function() {
    it("should return /logout", function() {
      expect(this.urlService.logoutUrl()).toEqual('/logout');
    });
  });
  
  describe("books url", function() {
    it("should return /books", function() {
      expect(this.urlService.booksUrl()).toEqual('/books');
    });
  });

});
