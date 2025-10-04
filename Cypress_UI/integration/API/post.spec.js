describe('POST Request', ()=>{

    it('validate the status code of get request', ()=>{
            let responses = cy.request('https://reqres.in/api/users?page=2')
            responses.its('status').should('equal', 200)
    })

    it('validate post request', ()=>{

        cy.request({
            method:"POST",
            url: 'https://reqres.in/api/users?page=2',

        }).then((res)=>{
            cy.log(res.body.page)
            // expect(res.body.page).to.eq(2)
            expect(res.body).property('data')
            expect(res.body).property('total_pages')
            expect(res.body).property('page')
            expect(res.body).property('per_page')
            expect(res.body).to.have.property('data').with.lengthOf(6)
            expect(res.body).to.include.keys('total_pages', 'per_page')

            // res.body.page.should('have.value', 2)
            // cy.log(res.body)
            // cy.log(res.status)
            // cy.log(res.headers)
            // cy.log(res.duration)
        })

    })
    
    it.only("validate Post request",()=>{

        cy.request({
            method : 'POST',
            url : "https://reqres.in/api/users",
            body : {
                'name': 'sarika', 
                'job': 'tester'
            }

        }).then((res)=>{
            expect(res.status).to.eq(201)
            expect(res.body).to.contain({
                "name": "sarika",
                "job": "tester" 
            })
        })
    })

    // it.only("token geberation", () => {
    //     cy.request({
    //         method: 'POST',
    //         url: 'https://api-m.sandbox.paypal.com/v1/oauth2/token',
    //         headers: {
    //             authorization: {
    
    //                 Username:"ASjT6K-HQwYlfUvkiQBvZ3U-xxviFGF14h16ThYZKuiPs0ArWk4UqsKPDbF6kAbdMzosXa4h29lUXiYw",
    //                 Password:"EENudVvuo_JS-dYbl8kkPPIyDvXSmGejXcyk5QExF8PwwBkFrui6d-HJRKDMkPhnLPovwJ3vj3lRFIBK"
    //             },
    //             // Body:{
    //             //     grant_type:"client_credentials"
    //             // }
    //         }
    //     })
    // })
})




