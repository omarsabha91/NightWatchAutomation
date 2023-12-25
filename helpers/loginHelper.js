// helpers/loginHelper.js
module.exports = {
    login: function(browser, username, password) {
        browser
            .url('http://stocksmaze.com/login')
            .setValue('input[name=username]', username)
            .setValue('input[name=password]', password)
            .click('button[type=submit]');
    }
};
