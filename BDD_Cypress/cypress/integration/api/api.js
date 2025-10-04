
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


When('user send the get request to retrive users',()=>{

    cy.request({
        method:'GET',
        url:'https://reqres.in/api/users?page=2'
    }).as('request')
})

Then('user should retrive users on page 2',()=>{
    cy.get('@request').then((response)=>{
        expect(response.status).to.eqls(200)
        expect(response.body).to.have.property('page')
    })
})

//-------------------------------------------------------------------------------------------------------

When('user send the delete request to delete users',()=>{

    cy.request({
        method:'DELETE',
        url:'https://reqres.in/api/users/2'
    }).as('request')
})
Then('user should deleted users',()=>{
    cy.get('@request').then((response)=>{
        expect(response.status).to.eqls(204)
        expect(response.duration).to.lessThan(700)
    })
})


//----------------------------------------------------------------------------------------------------------------

When('user send the post request to create user to {word} and {word}', (name, job) => {

    cy.fixture('api').then((obj) => {
        obj.user.name = name
        obj.user.job = job

        cy.request({
                 method:"POST",
                 url:"https://reqres.in/api/users",
                 body: obj.user      
        }).as('request')
    })   
})
Then("user with {word} and {word} should be created", (name, job) => {
    cy.get('@request').then((response)=>{
        expect(response.status).to.eqls(201)
        //expect(response.duration).to.lessThanOrEqual(900)
        expect(response.body.name).to.eqls(name)
        expect(response.body.job).to.eqls(job)
        expect(response.body.name).to.eqls(name)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')    
    })    
})

//-------------------------------------------------------------------------------------------------

When("user send the put request to update user to {word} and {word}",(name,job) => {

    cy.fixture('api').then((obj)=>{
        obj.user.name = name
        obj.user.job = job

        cy.request({
                 method:"PUT",
                 url:"https://reqres.in/api/users/2",
                 body: obj.user      
        }).as('request')
    })   
})
Then("user with {word} and {word} should be updated", (name,job) => {
    cy.get('@request').then((response)=>{
        expect(response.status).to.eqls(200)
        expect(response.duration).to.lessThan(900)
        expect(response.body.name).to.eqls(name)
        expect(response.body.job).to.eqls(job)
        expect(response.body).to.have.property('id')
        expect(response.body).to.have.property('createdAt')  
    })    
})

//----------------------------------------------------------------------------------------------------------


// **********************************************SARIKA***********************************************************

// import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

// let baseUrl = 'https://reqres.in'


// When('User send the request to get user', () => {
//     cy.request({
//         method: "GET",
//         url: `${baseUrl}/api/users?page=2`,
//     }).as('getUser')
// })



// Then('User should be get users successfully', () => {

//     cy.get('@getUser').then((res) => {
//         expect(res.status).to.eq(200)
//         expect(res.body.page).to.eq(2)
//         expect(res.body).property('data')
//         expect(res.body).property('total_pages')
//         expect(res.body).property('page')
//         expect(res.body).property('per_page')
//         expect(res.body).to.have.property('data').with.lengthOf(6)
//         expect(res.body).to.include.keys('total_pages', 'per_page')
//     })
// })


// When('User send the post request to create user with {word} and {word}', (name, job) => {

//     cy.fixture('apis').then((fixture) => {
//         fixture.user.name = name
//         fixture.user.job = job
//         cy.request({
//             method: "POST",
//             url: `${baseUrl}/api/users`,
//             body: fixture.user
//         }).as('createUser')
//     })
// })


// Then('User with {word} and {word} should be created', (name, job) => {

//     cy.get('@createUser').then((res) => {
//         expect(res.status).to.eq(201)
//         expect(res.body.name).to.eq(name)
//         expect(res.body.job).to.eq(job)
//         expect(res.body).to.have.property('id')
//         expect(res.body).to.have.property('createdAt')
//     })
// })


// When('User send the put request to update user with {word} and {word}', (name, job) => {

//     cy.fixture('apis').then((fixture) => {
//         fixture.user.name = name
//         fixture.user.job = job
//         cy.request({
//             method: "PUT",
//             url: `${baseUrl}/api/users`,
//             body: fixture.user
//         }).as('updateUser')
//     })
// })


// Then('User with {word} and {word} should be updated', (name, job) => {

//     cy.get('@updateUser').then((res) => {
//         expect(res.status).to.eq(200)
//         expect(res.body.name).to.eq(name)
//         expect(res.body.job).to.eq(job)
//         expect(res.body).to.have.property('updatedAt')

//     })

// })


// When('User send the delete request to delete user with {word} and {word}', (name, job) => {

//     cy.fixture('apis').then((fixture) => {
//         fixture.user.name = name
//         fixture.user.job = job
//         cy.request({
//             method: "DELETE",
//             url: `${baseUrl}/api/users?page=2`,
//             body: fixture.user
//         }).as('deleteUser')
//     })
// })


// Then('User with {word} and {word} should be deleted', (name, job) => {

//     cy.get('@deleteUser').then((res) => {
//         expect(res.status).to.eq(204)
//     })

// })


//******************************************************************************************************************* */








