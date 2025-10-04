///<reference types="cypress" />

describe('tranverse method in cypress',function(){

    //<h1 id = "one" class = "two" name ="three">Heading</h1>
    // element should be unique ===> ctrl + f  ====> search for element
    // id ===>  cy.get('#one')
    // class ==> cy.get('.two')
    // any attribute cy.get('h1[name='three']')
    // tagName  ===> cy.get('h1')
    // text ===> cy.contains('Heading')

    it('To get children of DOM elements, use the .children() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().should('have.length',3)

    })
    
    it('To get the first DOM element within elements, use the .first() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('have.text','Home')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().first().should('contain','Home')
        //  'home '   ===> hom  contain  substring 
        //            ===>   'home '  have.text looks for exact value    Home == Home
     })

    
    it('To get the last DOM element within elements, use the .last() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().last().should('have.attr','class','breadcrumb-item active')

    })

    
    it('To get a DOM element at a specific index, use the .eq() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(0).should('contain','Home')
        // cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(1).should('cotain','About Us')
        // cy.get('ol[class="breadcrumb traversal-breadcrumb"]').children().eq(2).should('contain','Contact Us')
    })

    // siblings()
    
    it('To get the next sibling DOM element within elements, use the .next() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-food-list"]').children().should('have.length',11)
        cy.get('#veggie').next().should('have.text','Asparagus')
    })

    
    it('To get the previous sibling DOM element within elements, use the .prev() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('ul[class="traversal-food-list"]').children().should('have.length',11)
        cy.get('#veggie').prev().should('have.text','Figs')
    })

    it.only('To get all sibling DOM elements of elements, use the .siblings() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').siblings().each((el)=>{
            cy.log(el.text())
        })//.should('have.length',10)
    })
    // sibling -- prev() next() siblings() nextAll()  prevAll()

    it('To get all of the next sibling DOM elements within elements, use the .nextAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').nextAll().should('have.length',4)

    })
    it('To get all previous sibling DOM elements within elements, use the .prevAll() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevAll().should('have.length',6)
    })

    // previous until and next until 
    //<ul>
        //<li>A</li>
        //<li>B</li>
        //<li>C</li>
        //<li>D</li>
        //<li>E</li>
    //</ul>

    it('To get all previous sibling DOM elements within elements until other element, use the .prevUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#veggie').prevUntil('#fruits').should('have.length',5)
    })

    
    it('To get all of the next sibling DOM elements within elements until another element, use the .nextUntil() command.',function(){
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
        cy.get('#fruits').nextUntil('#veggie').should('have.length',5)
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    
    it('',function(){
        
    })

    



})