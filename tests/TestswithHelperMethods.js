// tests/someTest.js
const loginHelper = require('../helpers/loginHelper');

module.exports = {
    'Login Test': function(browser) {
        loginHelper.login(browser, 'username', 'password123');
        // Additional test steps...
    }
};


//important commands
//npx nightwatch tests/googleTest.js  # Run a specific test
//npx nightwatch                      # Run all tests

