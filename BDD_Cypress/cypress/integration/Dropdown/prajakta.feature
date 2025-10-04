Feature: Login functionality recast
    User already signup

    Scenario: Login with Valid Credentials
        Given Navigate to the recast login page
        When User entered the username and password and click on login button
        Then User should navigate to recast Dashboard

    Scenario: Login with Invlid Credentials
        Given Navigate to the recast login page
        When User entered the invalid username and invalid password and click on login button
        Then User should not be logged in

    @focus
    Scenario Outline: Login with Valid Credentials Outline Example
        Given Navigate to the recast login page
        When Outline <username> and <password> and click on login button
        Then User should navigate to recast home page

        Examples:
            | username                      | password    |
            | pansaregauri9@gmail.com       | gauri@      |
            | prajaktabahirat3@gmail.com    | prajgithub3 |
            | chinmaydeshpande010@gmail.com | chinmay123  |



