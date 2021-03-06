var CommonElements = function() {

    this.medicLogo = element(by.css('.logo-full'));
    this.messagesLink=element(by.id('message-tab'));
    this.tasksLink=element(by.id('tasks-tab'));
    this.peoplesLink=element(by.id('contacts-tab'));
    this.targetsLink=element(by.id('analytics-tab'));
    this.historyLink=element(by.id('reports-tab'));
    this.configurationLink=element(by.id('configuration-tab'));
    this.hamburgerMenu=element(by.css('.dropdown options'));

    //vavigation functions

       this.goToMessages = function() {

        helper.waitUntilReady(this.messagesLink)
        this.messagesLink.click()
    }

        this.goToTasks = function() {

        helper.waitUntilReady(this.tasksLink)
        this.tasksLink.click()
    }

        this.goToPeople = function() {

        helper.waitUntilReady(this.peoplesLink)
        this.peoplesLink.click()
    }

        this.goToTargets = function() {

        helper.waitUntilReady(this.targetsLink)
        this.targetsLink.click()
    }


   this.goToHistory = function() {

        helper.waitUntilReady(this.historyLink)
        this.historyLink.click()
    }

   this.goToConfiguration = function() {

        helper.waitUntilReady(this.configurationLink)
        this.configurationLink.click()
    }


      this.openMenu = function() {

        helper.waitUntilReady(this.messagesLink)
        this.hamburgerMenu.click()
    }

}

module.exports = CommonElements;

