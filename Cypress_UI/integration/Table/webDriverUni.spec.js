describe("Tables in cypress",()=>{


    it('validate the sum of table column', ()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')


        function tableSum(id){

            cy.get(`#t0${id}`).find('tr').then((el)=>{
                cy.log(el.text())
            })

        }

        tableSum(1)
    })

})