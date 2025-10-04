describe('automate calendra', () => {

    it('validate the datepicker', () => {
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html')
        let dt = new Date();
        dt.setDate(dt.getDate() + 300)
        // Expected values 
        let year = dt.getFullYear()
        let month = dt.toLocaleString('default', { month: 'long' })
        let furturedate = dt.getDate()
        // cy.log(year)
        // cy.log(month)
        // cy.log(furturedate)


        function selectMonthAndYear(){
            cy.get('#datepicker').click()  // box
            cy.get('.datepicker-switch').first().then((el)=>{  // month
                cy.log(el.text())
                if(!el.text().includes(year)){
                    cy.get('.next').first().click()  // next arraow
                    selectMonthAndYear()
                }
            }).then(()=>{
                cy.get('.datepicker-switch').first().then((el)=>{
                    cy.log(el.text())
                    if(!el.text().includes(month)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
                })
            })
        }
        function selectDate(){
            cy.get('.day').contains(furturedate).click();
            return true
            
        }

        selectMonthAndYear()
        selectDate()
        
    })

})


// make my trip 
// spice jet 
// redbus