describe("",()=>{
    it.only('Get the wheather information for all cities', () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=Am"
        }).then((res)=>{
          const  Cities = res.body
            return Cities
        }).then((Cities) => {
        let k = Array.from(Cities).length
            for (let i = 0; i < k; i++) {
                cy.request({
                    method: "GET",
                    url: "https://www.metaweather.com/api/location/search/?query=" + Cities[i].title
                }).then((res) => {
                    expect(res.status).eq(200)
                    expect(res.body[0]).to.have.property('title', Cities[i].title)
                })
            }
        })
    })


    it.only('Get the wheather information for all cities', () => {
        cy.request({
            method: "GET",
            url: "https://www.metaweather.com/api/location/search/?query=Am"
        }).then((res)=>{
          const  Cities = res.body
            return Cities
        }).then((Cities) => {
        // let k = Array.from(Cities).length
            for (let k of Cities){ 
                cy.request({
                    method: "GET",
                    url: "https://www.metaweather.com/api/location/search/?query=" +k.title
                }).then((res) => {
                    expect(res.status).eq(200)
                    expect(res.body[0]).to.have.property('title', k.title)
                })
            }
        })
    })
})














