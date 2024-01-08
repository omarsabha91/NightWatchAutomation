const headerCommands = {
    clickMenu: function() {
        this.click('@menuButton');
        return this;
    },
    // other header-specific commands
};

module.exports = {
    selector: '#header',
    elements: {
        menuButton: '#menu', // example selector
        // other header elements
    },
    commands: [headerCommands],
};
