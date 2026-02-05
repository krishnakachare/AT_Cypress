Feature: Cypress Dropdown functionality
    User already signup

    Scenario: Rahul shetty drop down example
        Given Navigate to the Automation Page
        When select the dropdown list

    
    Scenario: Validate the Auto-suggestion dropdown list
        Given Navigate to the Google Page
        When Enter the search element
        Then Validate the URL

  
    Scenario: Validate the Auto-suggest dropdown list
        Given Navigate to the OYO Page
        When Enter the search OYO element
        And Enter the search OYO element using js
        Then Validate the Search Element

    @focus
    Scenario: Validate the Kesari Auto-suggest dropdown list
        Given Navigate to the Kesari Page
        When Enter the search Kesari element
        Then Validate the Search KesariElement