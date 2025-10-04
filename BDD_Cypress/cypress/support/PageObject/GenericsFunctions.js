export default class GenericFunctions{

    Click(element){
        cy.get(element,{timeout:20000}).click();
    }

    Visit(element){
        cy.visit(element)
    }

    GetElement(element){
        return (cy.get(element))
    }

    GetIndexElement(element, index){
        return (cy.get(element).eq(index))
    }

    SearchElement(element, search){
        return (cy.get(element).type(search))
    }

    GetText(element, index){
        return (cy.get(element).eq(index).invoke('text'))
    }

    ElementWithText(element,Text){
        cy.get(element).should('have.text',Text)
    }

    getContainsClick(element){
        return (cy.contains(element).click())
    }

    getContains(element){
        return (cy.contains(element))
    }
    containsEle(element1, element2){
        return (cy.get(element1).contains(element2))
    }
    getChildren(element){
        return (cy.get(element).children())
    }
    getChildrenFilter(element, element1){
        return (cy.get(element).children().filter(element1))
    }

    nextUntil(element1, element2){
        return (cy.get(element1).nextUntil(element2))
    }

    prevUntil(element1, element2){
        return (cy.get(element1).prevUntil(element2))
    }
    FindElement(element, element1){
        return (cy.get(element).find(element1))
    }

    ChainFindElement(element1, element2, element3, element4){
        return (cy.get(element1).find(element2).find(element3).find(element4))
    }
    
    activeChildren(element){
        return (cy.get(element).children('.active'))
    }

    ulClosest(element){
        return (cy.get(element).closest('ul'))
    }

    liClosest(element){
        return (cy.get(element).closest('li'))
    }

    GetChildrenEq(element, index){
        return (cy.get(element).children().eq(index))
    }

    GetChildrenLast(element){
        return(cy.get(element).children().last())
    }

    
    GetChildrenFirst(element){
        return(cy.get(element).children().first())
    }


    ClickForecefullyWithMultiple(element){//{ multiple: true }
        cy.get(element).click({force:true}, { multiple: true });
    }

    ClickForecefully(element){//{ multiple: true }
        cy.get(element).click({force:true});
    }

    ClickOnSingleElement(elements, value){
        cy.get(elements).eq(value).click({force: true});
    }

    frameLoaded(element){
        return(cy.frameLoaded(element))
    }

    iframe(element){
        return (cy.iframe().find(element))
    }

    ClickOnSingleElementWithoutForce(elements, value){
        cy.get(elements).eq(value).click();
    }

    ClickOnElementUsingText(value){
        cy.contains(value).click({force: true});
    }

    ReloadPage(){
        cy.reload()
    }

    ScrollToBottom(){
        cy.wait(3000)
        cy.scrollTo('bottom')
        cy.wait(3000)
    }

    ScrollToUp(){
        cy.wait(3000)
        cy.scrollTo('top',{ensureScrollable: false})
        cy.wait(3000)
    }

    ClickOnElementUsingTextWithoutForce(value){
        cy.contains(value).click();
    }

    ClickOnSingleElementFromAllElements(elements, value){
        cy.get(elements).each(($el, index, $list) => {
            if ($el.text().includes(value)){
                $el.click();
            }
        })
    }

    GetTextFromElement(element){
        return (cy.get(element).then((element) => {
            return element.text()
        }))
    }

    GetTextFromElement(element){
        return cy.get(element).text()
    }

    GetTextFromElementUsingXpath(element){
        return (cy.xpath(element).then(($ele) => {
            return $ele.text()
        }))
    }

    GetTextFromAllElements(elements){
        return (cy.get(elements).each(($el, index, $list) => {
            return $el.text();
        }))
    }

    Clear(element){
        cy.get(element).clear()
    }

    CountOfAllElements(elements){
        return (cy.get(elements).then((elements) => {
                return elements.length
        }))
    }

    // FindIfElementExistsInDom(parent, child){
    //     return (cy.get(parent).find(child).length)
                
    // }

    FindIfElementExistsInDom(parent, child){
        return (cy.get(parent).find(child))
                
    }

    ClearCookies(){
        cy.clearCookies()
    }

    ClearLocalStorage(){
        cy.clearLocalStorage()
    }

    // ElementScrollIntoView(element, value, count){
    //     if(count <= 15){
    //         cy.get(element).eq(value).scrollIntoView({duration: (count * 1000)})
    //     }else if(count > 15 && count <= 50){
    //         cy.get(element).eq(value).scrollIntoView({duration: ((count * 1000) + 5000)})
    //     }else{
    //         cy.get(element).eq(value).scrollIntoView({duration: ((count * 1000) + 10000)})
    //     }
    // }

    // GetTextFromDefinedElement(element, value){
    //     return (cy.get(element).eq(value).then((textOfDefinedElement) => {
    //         return textOfDefinedElement;
    //     }))
    // }

    GetCurrentPageUrl(){
        this.wait(2000)
        return cy.url()
    }

    GetUrl(page){
        cy.visit(page)
    }

    IsVisible(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isVisible($el)
        }))       
    }

    IsElement(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isElement($el)
        }))       
    }

    IsDom(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isDom($el)
        }))       
    }

    IsFocusable(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isFocusable($el)
        }))       
    }

    IsDetached(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isDetached($el)
        }))       
    }



    IsHidden(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isHidden($el)
        }))       
    }

    IsAttached(element){
        return (cy.get(element).then(($el) => {
            return Cypress.dom.isAttached($el)
        }))       
    }

    IsDisabled(element){
        return (cy.get(element).then(($el) => {
            return ($el).prop('disabled')
        }))       
    }

    IsVisibleWithContains(text){
        return (cy.contains(text).then(($el) => {
            return Cypress.dom.isVisible($el)
        }))       
    }

    IsVisibleForSingleElement(element, value){
        return (cy.get(element).eq(value).then((el) => {
            return Cypress.dom.isVisible(el)
        }))       
    }

    // RandomValueFromCount(value){
    //     return Math.floor((Math.random() * value) + 1);
    // }

    Type(element, value){
        cy.get(element).type(value,{force: true});
    }

    CompareAttributeOfSingleElement(elements, value, attribute){
        return (cy.get(elements).eq(value).invoke("attr", attribute))
    }

    RemoveAttributeFromSingleElement(element, attribute){
        cy.get(element).invoke("removeAttr", attribute)
    }

    wait(time){
        cy.wait(time)
    }

    UnRegisterServiceWorkerOfBrowser(){
        if (window.navigator && navigator.serviceWorker) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                registrations.forEach((registration) => {
                    registration.unregister()
                })
            })
        }
    }

    // SelectDate(days){
    //     let date = new Date();
    //     return (new Date(date.getTime() + (days * 24 * 60 * 60 * 1000)))
    // }

    // Select_YY_MM_DD_Format(value){
    //     if(value == "today"){
    //         return (this.SelectDate(0)).toISOString().split('T')[0]
    //     }else if(value == "yesterday"){
    //         return (this.SelectDate(-1)).toISOString().split('T')[0]
    //     }else if(value == "future"){
    //         return (this.SelectDate(1)).toISOString().split('T')[0]
    //     }else{
    //         return (this.SelectDate(5)).toISOString().split('T')[0]
    //     }
    // }

    // GenerateDate(value){
    //     let date = ""
    //     if(value == "today"){
    //         date = date+this.SelectDate(0)
    //         date = date.replace(" GMT+0530 (India Standard Time)", "")
    //         return (date)
    //     }else if(value == "yesterday"){
    //         date = date+this.SelectDate(-1)
    //         date = date.replace(" GMT+0530 (India Standard Time)", "")
    //         return (date)
    //     }else if(value == "future"){
    //         date = date+this.SelectDate(1)
    //         date = date.replace(" GMT+0530 (India Standard Time)", "")
    //         return (date)
    //     }else{
    //         date = date+this.SelectDate(5)
    //         date = date.replace(" GMT+0530 (India Standard Time)", "")
    //         return (date)
    //     }
    // }

    // MonthInNumeric(Month){
    //     if(Month == "Jan" || Month == "January"){
    //         return "01"
    //     }else if(Month == "Feb" || Month == "February"){
    //         return "02"
    //     }else if(Month == "Mar" || Month == "March"){
    //         return "03"
    //     }else if(Month == "Apr" || Month == "April"){
    //         return "04"
    //     }else if(Month == "May" || Month == "May"){
    //         return "05"
    //     }else if(Month == "Jun" || Month == "June"){
    //         return "06"
    //     }else if(Month == "Jul" || Month == "July"){
    //         return "07"
    //     }else if(Month == "Aug" || Month == "August"){
    //         return "08"
    //     }else if(Month == "Sep" || Month == "September"){
    //         return "09"
    //     }else if(Month == "Oct" || Month == "October"){
    //         return "10"
    //     }else if(Month == "Nov" || Month == "November"){
    //         return "11"
    //     }else if(Month == "Dec" || Month == "December"){
    //         return "12"
    //     }
    // }

    // RejexToGetOnlyDigitFromString(value){
    //     let count = value
    //     count = count.replace(/[^0-9]/g, "")
    //     count = count.replace(" ","")
    //     return count
    // }

    // toLowerCase(String){
    //     String = this.RemoveSpace(String)
    //     String = String.replace(" ","")
    //     String = String.replace(/\s/g, '');
    //     return (String.toLowerCase())
    // }

    // RemoveSpace(String){
    //     return (String.replace(/\s+/, ""))
    // }

    ReplaceWord(String, OldValue, NewValue){
        return (String.replace(OldValue, NewValue))
    }

    // CompareTwoDate(date1, date2){
    //     const dt1 = new Date(date1)
    //     const dt2 = new Date(date2)
    //     if (dt1 <= dt2){
    //         return true
    //     }else if (dt1 > dt2){
    //         return false
    //     }
    // }

    // CustomWaitAndClick(element, value){
    //     const self = this
    //     this.IsVisible(element).then((val) => {
    //         if(val == true){
    //             self.wait(3000)
    //             self.ClickOnSingleElementFromAllElements(element, value);
    //         }else{
    //             self.wait(3000)
    //             self.flag++;
    //             if (self.flag < 6){
    //                 self.CustomWaitAndClick(element, value)
    //             }         
    //         }
    //     })
    // }

    GetIndexValueFromElementText(element, elementname){
        return (cy.get(element).each(($el, index, $list) => {
            if ($el.text() == elementname) {
                return index
            }
        })) 
    }

  

    ClickFromList(element, elementname){

        cy.get(element).each(($el, index, $list) => {
            if ($el.text() == elementname) {
                cy.wrap($el).click({ multiple: true })
            }
        })
    }


    VisibleText(Text){
        cy.contains(Text,{timeout:20000}).should('be.visible')
    }

    VisibleElement(element){
        cy.get(element,{timeout:20000}).should('be.visible')
    }

    NOVisibleElement(element){
        cy.get(element,{timeout:20000}).should('not.be.visible')
    }

    NoVisibleText(text){
        cy.contains(text,{timeout:20000}).should('not.be.visible')
    }

    NotVisibleElement(element){
        cy.get(element,{timeout:20000}).should('not.exist')
    }

    VisibleElementwithTextContain(element,text){
        cy.get(element).contains(text)
    }

    VisibleSingleElementTextInList(elements, value,text){
        cy.get(elements).eq(value).should('have.text',text)
    }

    VisibleElementWithText(element,text){
        cy.get(element).should('have.text',text)
    }


    VisibleElementFromList(element,index){
        cy.get(element).eq(index).should('be.visible')
    }

    ExistVisibleElement(element){
        cy.get(element,{timeout:20000}).should('exist')
    }

    ContainExistVisibleElement(element){
        cy.contains(element,{timeout:20000}).should('exist')
    }

    ContainNotExistVisibleElement(element){
        cy.contains(element,{timeout:20000}).should('not.exist')
    }

    ContainElement(element,text){
        cy.get(element,{timeout:20000}).contains(text)
    }

    ContainElementClick(element,text){
        cy.get(element,{timeout:20000}).contains(text).click()
    }


    


    ClickOneElementFromList(element,index){
        cy.get(element).eq(index).click({force: true})
    }

    TypeOneElementFromList(element,index,text){
        cy.get(element).eq(index).type(text)
    }

    CompleteList(element){
        cy.get(element).each(($el)=>{
            $el.click()
        })
    }

    ContainClick(Text){
        cy.contains(Text).click({force: true})
    }

    ElementWithClass(element,cls){
        cy.get(element,{timeout:20000}).should('have.class',cls)
    }

    ElementNotWithClass(element,cls){
        cy.get(element,{timeout:20000}).should('not.have.class',cls)
    }

    ElementWithAttr(element,attr,value){
        cy.get(element,{timeout:20000}).should('have.attr',attr,value)

    }

    ElementWithNotAttr(element,attr,value){
        cy.get(element,{timeout:20000}).should('not.have.attr',attr,value)

    }

    Mousemove(element){
        cy.get(element,{timeout:20000}).trigger('mousemove',{force: true})
    }

    ContainMouseScroll(Text){
        cy.contains(Text).scrollIntoView()
    }

    MouseScroll(element){
        cy.get(element).scrollTo('bottom')
    }

    Screenshot(Filename){
        cy.screenshot(Filename)
    }

    TextWithClass(text,cls){
        cy.contains(text).should('have.class',cls)
    }

    ElementWithClass(element,cls){
        cy.get(element).should('have.class',cls)
    }

    NotElementWithClass(element,cls){
        cy.get(element).should('not.have.class',cls)
    }


    
    ClickRandomElementFromList(element){
        cy.get(element).its('length').then(elementCount => {
            let selected = Cypress._.random(elementCount - 1); // lower = 0 is default
            cy.get(element).eq(selected).click({force: true}) // saving the text as an alias to be used later
        });
    }

    CheckElementWithValue(element,value){
        cy.get(element).eq(value).check({force: true},{multiple: true})
    }

    UncheckElement(element){
        cy.get(element).uncheck({force: true},{multiple: true})
    }

    UncheckOneElementFromListEq(element,value){
        cy.get(element).eq(value).uncheck({force: true},{multiple: true})
    }

    CheckRandomElementFromList(element){
        cy.get(element).its('length').then(elementCount => {
            let selected = Cypress._.random(elementCount - 1); // lower = 0 is default
            cy.get(element).eq(selected).check({force: true}) // saving the text as an alias to be used later
        });
    }

    CheckUncheckRandomElementFromList(element){
        cy.get(element).its('length').then(elementCount => {
            let selected = Cypress._.random(elementCount - 1); // lower = 0 is default
            cy.get(element).eq(selected).check({force: true}).uncheck({force: true}) // saving the text as an alias to be used later
        });
    }

    ElementBeforeAndAfterWithText(element,element2){
        cy.get(element)
        .then(($text1) => {const text1 = $text1.text()
        cy.get(element2).click()
        cy.wait(2000)
        cy.get(element)
        .then(($text1) => {const text2 = $text1.text()
        expect(text2).not.to.be.eql(text1)
        
        })
    })

    
    }  

    ElementSameBeforeAndAfterWithText(element,element2){
        cy.get(element)
        .then(($text1) => {const text1 = $text1.text()
        cy.get(element2).click()
        cy.wait(2000)
        cy.get(element)
        .then(($text1) => {const text2 = $text1.text()
        cy.wait(5000)
        expect(text2).to.be.eql(text1)
        
        })
    })

    
    }  

    
    ElementStyleBeforeAndAfter(element,element2){
        cy.get(element).invoke('attr', 'style')
            .then(($style1) => {const style1 = $style1
            cy.get(element2).click()
            cy.get(element).invoke('attr', 'style')
            .then(($style1) => {const style2 = $style1
            expect(style2).not.to.be.eql(style1)
            
            })
            
        })
    

    
    }
    
    ElementDisbled(element){
        cy.get(element).should('be.disabled')
    }

    ElementEnabled(element){
        cy.get(element).should('be.enabled')
    }

    RemoveAttr(element,Attr){
        cy.get(element).invoke('removeAttr',Attr)
    }

    AttachFile(element,File){
        cy.get(element).attachFile(File)
    }






    RandomStringAttached(text) {
        var text = '';
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }


    FindAndVisibleCheck(element,element2){
        cy.get(element).find(element2).should('be.visible')
    }



    // RandomNumber() {
    //     var number = "";
    //     var possible = "0123456789";
    
    //     for (var i = 0; i < 10; i++)
    //       number += possible.charAt(Math.floor(Math.random()));
    
    //     return number;
    //   }


    RandomNumber(min, max) { 
        return Math.floor(Math.random() * (max - min) + min);
    }

    CheckTextWithEq(element,num,text){
        cy.get(element).eq(num).should('have.text',text)
    }


    ElementStyleBeforeAndAfterTrigger(element,element2){
        cy.get(element).invoke('attr', 'style')
            .then(($style1) => {const style1 = $style1
            cy.get(element2).trigger('mousedown',{force: true}).trigger('mousemove','bottom')
            cy.get(element).invoke('attr', 'style')
            .then(($style1) => {const style2 = $style1
            expect(style2).not.to.be.eql(style1)
            
            })
            
        })
    

    
    }

    MouseTrigger(element,action){
        cy.get(element).trigger(action)
    }

    MouseTriggerwithPosition(element,action,position){
        cy.get(element).trigger(action,position)
    }





    


    

}