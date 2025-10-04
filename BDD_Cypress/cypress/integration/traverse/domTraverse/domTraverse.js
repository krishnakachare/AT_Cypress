
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import CSSSelector from "../../../support/cssElement";
import GenericFunctions from "../../../support/PageObject/GenericsFunctions";

const selector = new CSSSelector()
const generic = new GenericFunctions()

When('Childern method to get the Children of the DOM', () => {
    generic.getChildren(selector.menuBar, selector.active).should('contain', 'Contact Us')
    generic.activeChildren(selector.menuBar).should(selector.text, 'Contact Us')
    generic.activeChildren(selector.menuBar).should('contain', 'Contact Us')
})

And('Closest method to validate the closest ancestor of the element', () => {
    generic.ulClosest(selector.todaySpan).should('have.class', 'list-group')
    generic.liClosest(selector.productSpan).should(selector.text, "All Products20")
    generic.ulClosest(selector.todaySpan).children().should(selector.length, '2')
})

And('Eq method to retrive the specific element in the list bades on index', () => {
    generic.GetChildrenEq(selector.drinksList, 4).should(selector.text, "Sugar")
    generic.GetChildrenEq(selector.drinksList, 4).should(selector.text, "Sugar")
    generic.GetChildrenEq(selector.drinksList, 4).should('contain', "Sug")
})

And('Last method to retrive the last element in the list', () => {
    generic.GetChildrenLast(selector.drinksList).should(selector.text, "Sugar")
    generic.GetChildrenLast(selector.foodList).should(selector.text, "Lentils")
})

And('First method to retrive the first element in the first', () => {
    generic.GetChildrenFirst(selector.drinksList).should(selector.text, "Coffee")
    generic.GetChildrenFirst(selector.jobMenu).should(selector.text, "Finance")
    generic.GetChildrenFirst(selector.jobList).should(selector.text, "Types of Jobs")
})

And('Filter method to retrive the element that matched a specific condition', () => {
    generic.getChildrenFilter(selector.toggleBtn, selector.active).should(selector.text, "Button-1")
    generic.getChildrenFilter(selector.toggleBtn, selector.active).should('have.attr', "type")
})

And('Find method to retrive the element that have specific selector or specfic', () => {
    generic.FindElement(selector.pagination, selector.liList).find('a').find('span').should(selector.length, '4')
    generic.ChainFindElement(selector.pagination, selector.liList, 'a', 'span').should(selector.length, '4')
    generic.FindElement(selector.pagination, selector.liList).find('a').should(selector.length, '7')
    generic.containsEle(selector.drinksList, 'Milk').nextAll().should(selector.length, '2')
})

And('NextAll method', () => {
    generic.containsEle(selector.drinksList, 'Milk').nextAll().should(selector.length, '2')
})

And('NextUntil method', () => {
    generic.nextUntil(selector.veggie, selector.ulList).should(selector.length, '4')
})

And('Not to remove the element from the set of elements', () => {
    generic.getChildren(selector.foodList).not('.list-header').should(selector.length, '9')
})

And('Parent method to get the parent element of DOM', () => {
    generic.getContains('Sugar').parent().should(selector.class, 'traversal-drinks-list')
})

And('Parents method', () => {
    generic.GetElement('div').parents().should('match', 'body') // tagName
})

And('Previous method', () => {
    generic.getChildren(selector.foodList).prev('.list-header').each((el) => {
        el.text().split(',')
    }).should(selector.text, 'FruitsVegetables')
})

And('Previous All', () => {
    generic.getChildren(selector.foodList).prevAll('.list-header').should(selector.text, 'VegetablesFruits')
})

Then('Previous Until', () => {
    generic.prevUntil(selector.veggie, selector.ulList).should(selector.length, '6')
})

