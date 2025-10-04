describe('Verify the date Picker functionality', () => {
    it('TC 01 Validate the date picker functionality', () => {
        let date = new Date()
        date.setDate(date.getDate() + 100)
        let Year = date.getFullYear()
        let Month = date.toLocaleString('default', { month: "long" }).slice(0, -1)
        let daaa = date.getDate()
        cy.log(Month)
        cy.log(daaa)
        cy.log(Year)
        cy.visit('https://www.redbus.com/')
        cy.get('input[id="onward_cal"]').click({ force: true })
        function SelectYearMonth() {
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('.next').last().click()
                    SelectYearMonth()
                }
            })
            cy.get('.monthTitle').last().then((el) => {
                if (!el.text().includes(Month)) {
                    cy.get('.next').last().click()
                    SelectYearMonth()
                }
            })
            function SelectDate() {
                cy.get('td[class="we day"]').contains(daaa).click({ force: true })
            }
            SelectDate()
        }
        SelectYearMonth()
    })

    it('TC 02 Validate the datePicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 400)
        let year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        let da = date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(da)
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.get('.col-xs-1').click()
        function SelectYearMonth() {
            cy.get('.ui-datepicker-title').then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(year)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()
                }
            })
            cy.get('.ui-datepicker-title').then((el) => {
                //cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.get('.ui-datepicker-next.ui-corner-all').click()
                    SelectYearMonth()
                }
            })
            function SelectDate() {
                cy.get('.ui-state-default').contains(da).click({ force: true })
            }
            SelectDate()
        }
        SelectYearMonth()
    })

    it(' TC 03 Validate the datePicker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 30)
        let year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        let da = date.getDate()
        cy.log(year)
        cy.log(month)
        cy.log(da)
        cy.visit('https://ksrtc.in')
        cy.get('input[id="txtJourneyDate"]').click()
        function SelectYearMonth() {
            cy.get('span[class="ui-datepicker-month"]').then((el) => {
                cy.log(el.text())
                cy.get('span[class="ui-icon ui-icon-circle-triangle-e"]').click()
            })
            function SelectDate() {
                cy.get('td[data-handler="selectDay"]').contains(da).click({ force: true })
            }
            SelectDate()
        }
        SelectYearMonth()
    })

    it.only('TC 04 Verify the date picker', () => {
        let date = new Date()
        date.setDate(date.getDate() + 50)
        let Year = date.getFullYear()
        let month = date.toLocaleString('default', { month: "long" })
        let d = date.getDate()
        cy.log(Year)
        cy.log(month)
        cy.log(d)
        cy.visit('https://paytm.com/bus-tickets')
        cy.get('._2k43').eq(0).click()
        function SelectYearMonth() {
            cy.get('.react-datepicker__current-month').last().then((el) => {
                if (!el.text().includes(Year)) {
                    cy.get('.react-datepicker_navigation.react-datepicker_navigation--next').click({ force: true })
                }
            })
            cy.get('.react-datepicker__current-month').last().then((el) => {
                cy.log(el.text())
                if (!el.text().includes(month)) {
                    cy.log(el.text())
                    cy.get('.react-datepicker_navigation.react-datepicker_navigation--next').click({ force: true })
                    SelectYearMonth()
                }
            })
        }
        SelectYearMonth()
        function SelectDate() {
            cy.get('.react-datepicker').last().contains(d).click()
        }
        SelectDate()
    })

    
})