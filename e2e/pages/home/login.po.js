var helper = require('../../helper'),
    faker = require('faker');

var LoginPage = function() {

    //random generates from 'faker' library
var randomUsername = faker.internet.userName();
    var randomPassword = faker.internet.password();
    

    //title and texts of notifications/error messages
    this.pageTitle = 'Etsy :: Your place to buy and sell all things handmade';
    this.incorrectCredentialsText = 'Password was incorrect.';
    this.passwordBlankText = "Can't be blank.";

    //sign in form elements selected by id
    this.usernameField = element(by.id('user'));
    this.userPasswordField = element(by.id('password'));
    this.loginInButton = element(by.id('login'));
   
  
    //functions to interact with our page
    

    this.login = function(username, password) {

        helper.waitUntilReady(this.userNameField)
        this.userNameField.sendKeys(username)
        this.passwordField.sendKeys(password)
        this.loginButton.click()
    }

}

module.exports = LoginPage;
