var helper = require('../../helper'),
    CommonElements = require('./common.po.js');

MessagesPage = require('../messages/messages.po.js');
ContactsPage = require('../contacts/contacts.po.js');
AnalyticsPage = require('../analytics/analytics.po.js');
TasksPage = require('../tasks/tasks.po.js');
ConfigurationPage = require('../configuration/configuration.po.js');
LoginPage = require('../login/login.po.js');

describe('Navigation tests : ', function () {

    var commonElements = new CommonElements();
    var messagesPage = new MessagesPage();
    var contactsPage = new ContactsPage();
    var analyticsPage = new AnalyticsPage();
    var tasksPage = new TasksPage();
    var configurationPage = new ConfigurationPage();
    var loginPage = new LoginPage();
    //var helper=new Helper();

    beforeAll(function () {
        browser.get(browser.params.url);

        loginPage.login('admin', 'pass');

        helper.waitElementToDisappear(loginPage.loginButton);

        helper.waitUntilReady(commonElements.messagesLink);

    });


    beforeEach(function () {
        // browser.get(browser.params.url);
        //timeout jasmine
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;


    });

    afterEach(function () {

        browser.driver.sleep(1000);
       // browser.manage().deleteAllCookies();

        //jasmine timeout
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;



    });
   
    it('should open Messages tab', function () {

        //helper.click(commonElements.messagesLink);
        commonElements.messagesLink.click();
        //assert message tab opens
        //expect(messagesPage.noMessageErrorField.getText()).toBe('No messages found');

        text='No messages found';

        expect(helper.isTextDisplayed('No messages found')).toBeTruthy();
       // expect(element(by.xpath("//*[. = '" + text + "']"))).isDisplayed().toBeTruthy();
//helper.isTextDisplayed('No messages found');
    });



    it('should open tasks tab', function () {

        commonElements.tasksLink.click();
        expect(helper.isTextDisplayed(
            'Tasks are disabled for admin users. If you need to see tasks, login as a normal user.')).
            toBeTruthy();


    });

    it('should open Reports or History tab', function () {

        //helper.click(commonElements.reportsLink);
        commonElements.reportsLink.click();
        expect(1).toBe(1);


    });

    it('should open Contacts or Peoples tab', function () {
        //helper.click(commonElements.contactsLink);
        commonElements.contactsLink.click();



    });

    it('should open Analytics or Targets tab', function () {

        //helper.click(commonElements.analyticsLink);
        commonElements.analyticsLink.click();


    });



});


