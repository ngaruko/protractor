exports.config = {
  framework: 'jasmine',
 capabilities: {
     browserName: 'chrome',
     directConnect: true

   //browserName: 'firefox'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  //specs: ['./e2e/pages/login/login.spec.js'],
  specs: ['./e2e/pages/common/common.specs.js'],
 //specs: ['./pages/*/*.spec.js'],
  //specs: ['spec.js'],
  params: {
      url: 'http://localhost:5988/medic/login'
  },
  suites: {
      
      login: './e2e/pages/login/**/*.spec.js',
      navigation:'./e2e/pages/common/common.specs.js',
      messages: './e2e/pages/messages/**/*.spec.js',
      contacts: './e2e/pages/contacts/**/*.spec.js',
      analytics: './e2e/pages/analytics/**/*.spec.js',
      tasks: './e2e/pages/tasks/**/*.spec.js',
      configuration: './e2e/pages/configuration/**/*.spec.js'
  },
  onPrepare: function() {
      browser.ignoreSynchronization = true;
      browser.driver.sleep(1000);

  },
 onCleanUp: function() {
    
    browser.driver.sleep(1000);
  },
}


