Feature: Login functionality recast
 User already signup 

    Scenario: Login with valid credentails
        Given User navigate to the recast login page 
        When User entered the username and password and click on login button
        Then User should navigate to reacast dashboard

    Scenario: Login with invalid credentials 
        Given User navigate to the recast login page 
        When User entered the invalid  username and invalid password and click on login button
        Then User should not be logged in