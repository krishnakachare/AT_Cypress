Feature: Login Functionlaity of OranageHRM

    Scenario: Login with valid credentials
        Given User navigating to OrangeHRM URL
        When User enter username as "Admin" and password as "admin123"
        And Used click on "Login" button
        Then User should navigate to Dashboard

    Scenario: Login with invalid credentials
        Given User navigating to OrangeHRM URL
        When User enter username as "dmin" and password as "admin12345"
        And Used click on "Login" button
        Then User should see appropriate validation message "Invalid credentials"









