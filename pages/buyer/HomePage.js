const HeaderMenu = require('./CommonComponents/HeaderMenu');

module.exports = {
    url: 'https://www.stocksmaze.com',
    sections: {
        header: HeaderMenu,
        // other sections
    },
    elements: {
        body: 'body',
        searchInput: 'input[type="search"][name="search_products"]',
        searchButton: 'button[type="submit"]',
        selectYourVendor: {
            selector: '//button[text()="Select your vendor"]',
            locateStrategy: 'xpath'
        }
    },
    commands: [{
        assertTitle: function(expectedTitle) {
            this.api.execute(function() {
                return document.title;
            }, [], function(result) {
                this.assert.equal(result.value, expectedTitle);
            });
            return this; // Allows chaining of commands
        },
    }]
};
