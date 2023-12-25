module.exports = {
    'stocks maze seller tests' : function (browser) {
        browser
            .url('https://seller.stocksmaze.com')
            .waitForElementVisible('body', 1000)
            .assert.titleContains('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Nightwatch.js')
            .end();
    }
};