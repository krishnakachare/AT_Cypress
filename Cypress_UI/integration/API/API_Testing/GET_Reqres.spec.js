describe('Get Request Validate', () => {

    it('GET Regres Request', () =>{
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2',
        }).then((response) =>{
            expect(response.status).to.eq(200)
            expect(response.duration).to.be.lessThan(500)
            expect(response.headers).to.contain({                           // keys in smaller letter always
                "transfer-encoding" :"chunked",
                "content-type" : "application/json; charset=utf-8"
            })
            expect(response.body).property('data')
            expect(response.body.page).to.eq(2)
            expect(response.body).property('data')
            expect(response.body).property('total_pages')
            expect(response.body).property('page')
            expect(response.body).property('per_page')
            expect(response.body).to.have.property('data').with.lengthOf(6)
            expect(response.body).to.include.keys('total_pages', 'per_page')
        })
    })


it("validate Post request",()=>{

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
                "job": "tester",
            })
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('createdAt')
        })
    })


it("validate PUT request",()=>{

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
            expect(res.body).to.have.property('updatedAt')
        })
    })

 it("validate DELETE request",()=>{

        cy.request({
            method : 'DELETE',
            url : "https://reqres.in/api/users/2",
        }).then((res)=>{
            expect(res.status).to.eq(204) 
        })
    })


})
