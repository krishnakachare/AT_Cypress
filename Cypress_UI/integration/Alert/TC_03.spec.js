describe("handling promat windows",()=>{
    it.only('Handling JS Prompt - Input text in prompt, Click OK and Validate Input Text', () => {
            cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then(($win) => {
                cy.stub($win, 'prompt').returns('This is a test text')
                cy.contains('Click for JS Prompt').click()
            })
            cy.get('#result').contains('You entered: This is a test text')
        })
       
})
