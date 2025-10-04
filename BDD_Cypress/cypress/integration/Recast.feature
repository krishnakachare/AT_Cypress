Feature: Recast studio Login

    Scenario:Login with valid login credentials
    Given User navigate to URL
    When User enter email id "mayurimkatwe@gmail.com" and password "asdfasdf12"
    And Tap on "Login" button
    And User wait for few sec to navigate into home page
    Then User should navigate to home page and "Dashboard" should be shown