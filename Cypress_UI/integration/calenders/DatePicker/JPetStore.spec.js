it ('My first test case',function()
{
    cy.visit("https://petstore.octoperf.com/actions/Catalog.action");
  

    cy.get('#SidebarContent > a:nth-child(1) > img').click();
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(2)').should('have.text', 'Angelfish')
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(4)').should('have.text', '$16.50')
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(5) > a').click()
    cy.get('#BackLink > a').click()
    cy.get('#SidebarContent > a:nth-child(4) > img').click();
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(2)').should('have.text', 'Bulldog')
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(4)').should('have.text', '$18.50')
    cy.get('#Catalog > table > tbody > tr:nth-child(2) > td:nth-child(1) > a').click()
    cy.get('#BackLink > a').click()

})