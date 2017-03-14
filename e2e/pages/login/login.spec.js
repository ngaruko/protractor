var helper = require('../../helper'),
    LoginPage = require('./login.po.js');
    CommonElements=require('../common/common.po.js')

describe('Login page : ', function() {

        //random generates from 'faker' library
    var wrongUsername = 'fakeuser';
    var wrongPassword = 'fakepass';
    
    //valid
    var validUsername = 'demo';
    var validPassword = 'medic';
    
    var loginPage = new LoginPage();
    var commonElements=new CommonElements();

    beforeEach(function() {
        browser.get(browser.params.url);

    });

    afterEach(function() {
         
        browser.driver.sleep(1000);
        browser.manage().deleteAllCookies();

    });

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual(loginPage.pageTitle);
    });

    it('should try to sign in and verify that credentials were incorrect', function() {
        
        helper.waitUntilReady(loginPage.usernameField);
        loginPage.login(wrongUsername, wrongPassword);
        helper.waitUntilReady(loginPage.incorrectCredentialsError);
       expect(loginPage.incorrectCredentialsError.getText()).toBe(loginPage.incorrectCredentialsText);
    });


   it('should sign in a valid user', function() {
       loginPage.login(validUsername, validPassword);
       
       helper.waitElementToDisappear(loginPage.loginButton);
       browser.driver.sleep(300000);
     helper.waitUntilReady(commonElements.medicLogo);
        //browser.driver.sleep(6000);

    });


});
