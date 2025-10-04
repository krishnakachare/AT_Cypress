describe('PUT Request', ()=>{

    it('validate the status code of get request', ()=>{
            let responses = cy.request('https://reqres.in/api/users/2')
            responses.its('status').should('equal', 200)
    })

    
    it.only("validate PUT request",()=>{

        cy.request({
            method : 'PUT',
            url : "https://reqres.in/api/users",
            body : {
                name: "sarika",
                job: "tester"
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body).to.contain({
                name: "sarika",
                job: "tester" 
            })
        })
    })

   
})




