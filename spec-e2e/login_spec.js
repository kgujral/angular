var protractor = require('protractor');
require('protractor/jasminewd');

describe('my angular app', function () {
	var ptor;
	describe('visiting the login page', function() {
		ptor = protractor.getInstance();

		beforeEach(function() {
			ptor.get('/');
		});

		describe('when user logs in', function() {
			it('should redirect to home page and the default message should be visible',function() {
				ptor.findElement(protractor.By.input("credentials.username")).sendKeys("Karan");
				ptor.findElement(protractor.By.input("credentials.password")).sendKeys("Gujral");
				ptor.findElement(protractor.By.id('log-in')).click();
				ptor.findElement(protractor.By.binding('{{ title }}')).getText().then(function(text) {
					expect(text).toEqual('Welcome to the Home page!');
				});
			});
		});
	});
});

