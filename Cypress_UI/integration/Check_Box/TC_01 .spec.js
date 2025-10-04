

describe("Handaling Checkboxes", () => {
    it("TC_01 Verify The Checkbox Element", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php")
        cy.get('input[type="checkbox"]').as('Soccer')
        cy.get('input[value="football"]').as('football')
        cy.get('@Soccer').check().should('be.checked')
        cy.get('@football').uncheck().should('not.be.checked')
    })
    it("TC_02 Verify The Multiple Checkbox Element", () => {
        cy.visit("http://www.tizag.com/htmlT/htmlcheckboxes.php")
        cy.get('input[type="checkbox"]').check().should('be.checked')
        cy.wait(2000)
        cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
    })
    it("TC_03 Verify the Checkbox element", () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value', 'option1')
        //unchecked the option1 box
        cy.get("#checkBoxOption2").uncheck().should('not.be.checked').and('have.attr', 'name')
        //check multiple checkbox options unsing common attribute
        cy.get('input[type="checkbox"]').check(['option2', 'option3']).should('be.checked')
    })
    it("TC_04 Verify the Checkbox element", () => {
        cy.visit("http://automationpractice.com/index.php?id_category=3&controller=category")
        cy.get(".sf-with-ul").first().click().should('be.visible')
        //check the cehckboxes and verify them
        cy.get('.checkbox').check().parent().should('have.class', 'checked')
        //uncheck the checkboxes and verify them
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')
    })
    it("TC_05 Verify the checkbox", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[type='checkbox']").check(['option2', 'option3'])
    })
})