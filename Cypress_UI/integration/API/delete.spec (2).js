

describe('DELETE Request', ()=>{

    it('validate the status code of get request', ()=>{
            let responses = cy.request('https://reqres.in/api/users/2')
            responses.its('status').should('equal', 200)
    })

    
    it.only("validate DELETE request",()=>{

        cy.request({
            method : 'DELETE',
            url : "https://reqres.in/api/users/2",
        }).then((res)=>{
            expect(res.status).to.eq(204) 
        })
    })

   
})




