describe('verify the various js alert',function(){
    // window object
    
        it('validate JS window:alert',function(){
            cy.on('window:alert',function(str){
                expect(str).to.eq('I am an alert box!')
            })
            cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
            cy.get('#button1').click()
        })
    
        it('validate JS window:confirm ok',function(){
            cy.on('window:confirm',function(str){
                console.log(str)
                return true
            })
            cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
            cy.get('#button4').click()
            cy.get('#confirm-alert-text').should('have.text',"You pressed OK!")
        })
    
        it('validate JS window:confirm cancel',function(){
            cy.on('window:confirm',function(str){
                expect(str).to.eq('Press a button!')
                return false
            })
            cy.visit('https://webdriveruniversity.com/Popup-Alerts/index.html')
            cy.get('#button4').click()
            cy.get('#confirm-alert-text').should('have.text',"You pressed Cancel!")
    
        })
    
    
        // window -- object ==> 3 alert ---> js alert , confirm , prompt
    
        
        it.only('validate JS window:prompt Ok',function(){
            let text = "hello"
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
            cy.window().then(function(obj){
                    //cy.log(obj)
                    cy.stub(obj,'prompt').returns(text)
            })
            cy.contains('Click for JS Prompt').click()
            cy.get('#result').should('have.text',`You entered: ${text}`)
    
        })
    
    
        // prompt cancel click 










        it('PROMPT js alert for null/cancel',()=>{
            cy.window().then((el)=>{
                cy.stub(el,'prompt').callsFake(()=> null)
                cy.contains('Click for JS Prompt').click()
                cy.get('#result').should('have.text','You entered:null')
            })
        })

        it.only('prompt',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
           
            cy.window().then((el)=>{
                cy.stub(el,'prompt').returns(null)
                //cy.stub(el,'alert').as('alert')
                cy.contains('Click for JS Prompt').click()
                cy.get('#result').should('have.text','You entered: null')
        
            })
        })
    
    })