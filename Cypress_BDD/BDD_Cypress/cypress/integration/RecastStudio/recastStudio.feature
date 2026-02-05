Feature: End to End Recast validation

    Scenario Outline: Login test for the recast

        Given Navigate to recast page
        When User logged in using <username>  Password as <password>
        Then Home page should not be displayed

        Examples:
            | username                  | password |
            | pansaregauri9@gmail.com   | gauri@   |
            | pansaregauri9@gmail.com   | gauri    |
            | sanchitadhole27@gmail.com | sanchu05 |
            | pansaresarika9@gmail.com  | sarika   |
            | sanchitadhole2@gmail.com  | sanchu05 |
