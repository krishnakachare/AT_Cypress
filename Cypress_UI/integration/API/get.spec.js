describe('GET Request', ()=>{

    it('validate the status code of get request', ()=>{
            let responses = cy.request('https://reqres.in/api/users?page=2')
            responses.its('status').should('equal', 200)
    })

    it('validate get contains the correct kye and value', ()=>{

        cy.request({
            method:"GET",
            url: 'https://reqres.in/api/users?page=2'
        }).then((res)=>{
            cy.log(res.body.page)
            expect(res.body.page).to.eq(2)
            expect(res.body).property('data')
            expect(res.body).property('total_pages')
            expect(res.body).property('page')
            expect(res.body).property('per_page')
            expect(res.body).to.have.property('data').with.lengthOf(6)
            expect(res.body).to.include.keys('total_pages', 'per_page')

            // res.body.page.should('have.value', 2)
            // cy.log(res.status)
            // cy.log(res.headers)
            // cy.log(res.duration)
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

// npx cypress run --spec .\cypress\integration\API\get.spec.js


