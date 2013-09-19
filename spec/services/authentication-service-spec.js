describe("service: AuthenticationService", function() {

  beforeEach(function() {
    module("app");
  });

  beforeEach(inject(function($http, AuthenticationService) {
    this.authService = AuthenticationService;
    this.spyHttpPost = spyOn($http, 'post');
  }));

  describe("login", function() {
    it("should redirect you to /login", function() {
      var crendentials = {name: 'karan', password: 'pass'};
      this.authService.login(crendentials);
      expect(this.spyHttpPost).toHaveBeenCalledWith('/login', crendentials);
    });
  });

  describe("logout", function() {
    it("should redirect you to /logout", function() {
      this.authService.logout();
      expect(this.spyHttpPost).toHaveBeenCalledWith('/logout');
    });
  });

});
