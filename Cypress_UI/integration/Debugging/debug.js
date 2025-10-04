describe("", () => {
    it('let me debug when the after the command executes', () => {
        cy.visit('https://www.selenium.dev/');
        cy.get("a.nav-link").first().then(() => {
            debugger
        });
        cy.contains("span", 'Downloads').then(($selectedElement) => {
            // Debugger will be hit after the cy.visit
            // and cy.get command have completed
            debugger
        });
    });


    it('let me debug when the after the command executes', () => {
        cy.visit('https://www.selenium.dev/');
        cy.get("a.nav-link").first().debug()
    });

    it.only('let me debug when the after the command executes', () => {
        cy.login(1, 2)
    });

})
