import CSSSelector from "../../support/cssElement";
import GenericFunctions from "../../support/PageObject/GenericsFunctions";
const selector = new CSSSelector()
const generic = new GenericFunctions()

Given("Navigate to recast page", () => {
    generic.Visit(selector.eComUrl)
})
