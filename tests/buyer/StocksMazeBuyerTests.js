module.exports = {
    'Stocks Maze Test 1': function(browser) {
       /* browser
            .url('https://www.stocksmaze.com')
            .waitForElementVisible('body', 1000)
            .assert.titleContains('Google') // Make sure this matches your actual page title
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'nightwatch')
            .waitForElementVisible('input[name=btnK]', 1000)
            .click('input[name=btnK]')
            .pause(1000)
            .assert.containsText('#main', 'Nightwatch.js')
            .end();*/
    },

    'navigateToStoresPage': function(browser) {
        const BuyerHomePage = browser.page.buyer.HomePage();
        const StoresPage = browser.page.buyer.StoresPage();

        BuyerHomePage.navigate().assertTitle('Buy with Confidence: Connect with Local & Global Sellers | Stocks Maze');
        StoresPage.navigate().assertTitle('Stores | Stocks Maze').end();
    }
};
