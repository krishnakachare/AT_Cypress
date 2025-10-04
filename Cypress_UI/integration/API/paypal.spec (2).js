describe('verify the Heroku', ()=>{

    let token = null

    it('Verify the  heruku GET api', () =>{

        cy.request({
            method: 'GET', 
            url: 'https://the-internet.herokuapp.com/basic_auth',
            headers: {
                authorization: "Basic YWRtaW46YWRtaW4="
            }
        }).then((response) =>{
            expect(response.status).to.eq(200)
        })

    })

    //paypal 
    // app create -- secret id -- client id 
    // post request hit
    // tocken generate
    // get 


    it('Generate Token ', () =>{
    
        cy.request({
            method: 'POST', 
            url: 'https://api.sandbox.paypal.com/v1/oauth2/token',
            form : true,
            headers: {
                authorization: "Basic QVNqVDZLLUhRd1lsZlV2a2lRQnZaM1UteHh2aUZHRjE0aDE2VGhZWkt1aVBzMEFyV2s0VXFzS1BEYkY2a0FiZE16b3NYYTRoMjlsVVhpWXc6RUVOdWRWdnVvX0pTLWRZYmw4a2tQUEl5RHZYU21HZWpYY3lrNVFFeEY4UHd3QmtGcnVpNmQtSEpSS0RNa1BobkxQb3Z3SjN2ajNsUkZJQks="
            },
            body:{
                grant_type: "client_credentials"
            }
        }).then((response) =>{
            // expect(response.data).to.eq(200)
            cy.log(response.body)
            token = response.body.access_token
            cy.log(token)

        })

    })

    it('Create Orders', () =>{
    
        cy.fixture('paypal/invoice').then((obj)=>{
            cy.request({
                method: 'POST', 
                url: 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            
                headers: {
                    authorization: `Bearer ${token} `,
                    "content-Type": "application/json", 
                }, 
                body
                
            }).then((response) =>{
                expect(response.status).to.eq(201)
            })

        })
    

    })



})