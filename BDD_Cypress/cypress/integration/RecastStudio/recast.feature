Feature: End to End Recast validation

    Scenario Outline: Login test for the recast

        Given Navigate to recast page
        When User logged in using <username>
        And Password as <password>
        And User clicks on submit button
        Then Home page should be displayed

        Examples:
            | username                | password |
            | pansaregauri9@gmail.com | gauri@   |
            | pansaregauri9@gmail.com | gauri    |