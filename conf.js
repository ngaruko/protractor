exports.config = {
  framework: 'jasmine',
 capabilities: {
     browserName: 'chrome',
     directConnect: true

   //browserName: 'firefox'
  },

  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['./e2e/pages/login/login.spec.js'],
 //specs: ['./pages/*/*.spec.js'],
  //specs: ['spec.js'],
  params: {
      url: 'https://alpha.dev.medicmobile.org'
  },
  suites: {
      login: './e2e/pages/login/**/*.spec.js',
      messages: './e2e/pages/messages/**/*.spec.js',
      people: './e2e/pages/people/**/*.spec.js',
      targets: './e2e/pages/targets/**/*.spec.js',
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


