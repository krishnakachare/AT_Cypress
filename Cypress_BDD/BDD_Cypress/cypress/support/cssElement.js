
class CSSSelector{
 
    // Recast
    eComUrl = 'https://app.recast.studio/auth/login/?ref=header-login'
    getUsername = '#login-form_email'
    getPassword = '#login-form_password'
    getLoginBtn = 'button[type="submit"]'
 
    // Google
    url = 'https://www.google.com/'
    searchBox = '.gLFyf'
    searchBtn = ':nth-child(1) > .eIPGRd > .pcTkSc'
    cypressSite = '[href="https://www.cypress.io/"] > .LC20lb'
    signUp = 'li>.kfaBGn'

    // AutomationPractice
    autoUrl = 'http://automationpractice.com/index.php'
    women = 'Women'
    autoTitle = 'a[title="Dresses"]'

    // WebDriverUniversity
    menuBar = 'ol[class="breadcrumb traversal-breadcrumb"]'
    breadcrumb = '.breadcrumb'
    todaySpan = '.badge-light'
    productSpan = '.traversal-badge'
    drinksList = '.traversal-drinks-list'
    foodList = '.traversal-food-list'
    jobList = '.traversal-job-list'
    jobMenu = '.menu'
    toggleBtn = 'div[data-toggle="buttons"]'
    active = '.active'
    pagination = '.pagination.traversal-pagination'
    liList = 'li'
    ulList = 'ul'
    length = 'have.length'
    text = 'have.text'
    class = 'have.class'
    property = 'have.property'
    contain = 'contain'
    veggie = '#veggie'

    // Spicejet
    spiUrl = 'https://www.spicejet.com/'
    roundTrip = '#ctl00_mainContent_rbtnl_Trip_1'
    oneWay = '#ctl00_mainContent_rbtnl_Trip_0'
    roundTripLabel = 'label[for="ctl00_mainContent_rbtnl_Trip_1"]'
    friendAndFamily ='#ctl00_mainContent_chk_friendsandfamily'
    familyFriendLabel = '#familyandfriend > label'
    familyFriend = '#familyandfriend'
    seniorCitizen = '#ctl00_mainContent_chk_SeniorCitizenDiscount'


    // Iframe
    rsUrl = 'https://rahulshettyacademy.com/AutomationPractice/'
    frameLoaded = '#courses-iframe'
    mentroship = 'a[href*="mentorship"]'
    bronze = 'h1[class*="pricing-title"]'
    dropdownLst = '#dropdown-class-example'
    selectLst = 'select>option'


    // file upload
    hrUrl = 'https://the-internet.herokuapp.com/upload'
    input = 'input[type="file"]'
    btn = '#file-submit'
    msg = '.example >h3'
    img = '#uploaded-files'


    // Google
    gUrl = 'www.google.com'
    inputBox = 'input[name="q"]'
    autoSuggestLst = '.erkvQe'
    pythonTutorial = 'h3[class="LC20lb DKV0Md"]'


    // OYO
    yUrl = 'https://www.oyorooms.com/'
    searchEle = '#autoComplete__home'
    searchItem = '.geoSuggestionsList__container'
    div = 'div'
    oyologinBtn = '.sideMenuAuthButton__text'

    // Kesari
    kUrl = 'https://ksrtc.in'
    kesariSearchEle = "#fromPlaceName"
    keasariSearchLst = '.ui-autocomplete >li>a'

}

export default CSSSelector;