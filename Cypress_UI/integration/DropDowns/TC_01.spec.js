describe("Handling Static and Dynamic Dropdwon Element", () => {
    it("TC_01 Verify the static element", () => {
        cy.visit("https://codenboxautomationlab.com/practice/")
        //static DropDwon
        cy.get("#dropdown-class-example").select("Selenium").should('have.value', 'option1')
        //Dynamic DropDwon
        cy.get('#autocomplete').type('Am')
        cy.get('ul[class="ui-menu ui-widget ui-widget-content ui-autocomplete ui-front"]>li').find('div:first').each((el) => {
            let newtext = (el.text())
            if (newtext == 'American Samoa') {
                cy.wrap(el).click({ force: true })
            }
        })
    })
    it("TC_02 Verify the static and dynamic element", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //static DropDwon
        cy.get("#dropdown-class-example").select('option1').should('have.value', 'option1')
        //Dynamic DropDwon
        cy.get('#autocomplete').type('Ba')
        cy.get('ul[id="ui-id-1"]>li').find('div:first').each((el) => {
            let country = (el.text())
            if (country == 'Bahamas') {
                cy.wrap(el).click({ force: true })
            }
        })
    })
    it("TC_03 Verify the static and dynamic element", () => {
        cy.visit("https://book.spicejet.com/")
        //static DropDwon

        cy.get('#ControlGroupSearchView_AvailabilitySearchInputSearchView_DropDownListCurrency').select('BDT')
            .should('have.value', 'BDT')

        //Dynamic DropDwon

        cy.get("#ControlGroupSearchView_AvailabilitySearchInputSearchVieworiginStation1_CTXT").type('Ah')
        cy.get('div[class="dropdownDiv"]>ul').find('li').each((el) => {
            let city = (el.text())
            if (city == ' Ahmedabad (AMD)') {
                cy.wrap(el).click()
            }
        })
    })
    it('TC_04 To verify the static and dynamic dropdown', () => {
        cy.visit('https://www.ebay.com/n/all-categories#ebay-motors')
-
        //static DropDwon
        cy.get('select[class ="gh-sb "]').select('20081').should('have.value', '20081')
        cy.get('div[id="gh-cat-box"]').click()

        //Dynamic DropDwon
        cy.get('select[aria-label="Select a category for search"] option').each((el, indx) => {
            var categoryName = el.text()
            if (categoryName == 'Baby') {
                cy.wrap(el).click({ force: true })
            }
        })
    })

    it('TC_05 To verify the static and dynamic dropdown', () => {
        cy.visit("https://www.way2automation.com/way2auto_jquery/dropdown.php#load_box")
        //static DropDwon
        cy.get('select').select('Afghanistan', { force: true }).should('have.value', 'Afghanistan')
    })
})

