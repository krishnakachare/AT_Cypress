describe('intercept with cypress example',()=>{

    it('test api with intercept',()=>{

        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({
            path : '/posts'

        }).as('post')

        cy.get("table:nth-of-type(1) a[href='/posts']").click()

        cy.wait('@post').then(inter =>{
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.have.length(100)
        })

    })

    it('mocking with intercept test with static response',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{totalpost:5, name:'Minskole'}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')

    })


    it('mocking with intercept test with dynamic response',()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')
        cy.intercept('GET','/posts',{fixture:"createuser.json"}).as('posts')
        cy.get("table:nth-of-type(1) a[href='/posts']").click()
        cy.wait('@posts')

    })
})