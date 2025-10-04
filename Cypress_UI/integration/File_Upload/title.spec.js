describe('Validate the window based elements', () => {

    it('validate the title', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        // cy.log(cy.title())
        expect(cy.title().chainerId).include('chainer')

        // regular expression
    })

    it('reload page', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.title().should('eq', 'Ethernet Devices - PLC Tools')
        cy.reload()

    })

    it('Backward and Forward', () => {
        cy.visit('https://plctools.com/ethernet-devices/')
        cy.contains(/^Analog Simulators$/).click({ force: true })
        cy.url().should('include', 'analog')
        cy.url().should('eq', 'https://plctools.com/analog-simulators/')
        cy.go('back')
        cy.go('forward')

    })


    it.only('invoke command', () => {

        // <p id='new'>apple</p>
        // cy.get('#new').invoke('text').then((el)=>{
        //     expect(el).to.equals('apple')
        // })

        cy.visit('https://plctools.com/')
        cy.get('h2[class="page-heading"]').first().should('have.text', 'Featured Products')
        cy.get('h2[class="page-heading"]').first().invoke('text').then((el) => {
            expect(el).to.equals('Featured Products')
        })
        cy.get('h2[class="page-heading"]').invoke('removeAttr', 'class').should('not.have.class', 'page-heading')
    })

    it.only('invoke remove attr for new page', () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#data-table').invoke('removeAttr', 'target').click({ force: true })
    })

})