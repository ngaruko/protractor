var helper = require('../../helper'),
    LoginPage = require('./home.po.js');

describe('Login page : ', function() {

    var loginPage = new LoginPage();

    beforeEach(function() {
        browser.get(browser.params.url);
    });

    afterEach(function() {
        browser.manage().deleteAllCookies();
    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual(loginPage.pageTitle);
    });

    it('should try to sign in and verify that credentials were incorrect', function() {
        
        helper.waitUntilReady(loginPage.usernameField);
        loginPage.login('fakeUser', 'fakePass');
        helper.waitUntilReady(loginPage.incorrectCredentialsError);
        expect(loginPage.incorrectCredentialsError.getText()).toBe(loginPage.incorrectCredentialsText);
    });


    it('should sign in a valid user', function() {
       loginPage.login('admin', 'pass')
       
        helper.waitForElementToDisappear(loginPage.loginButton)
    });

});
