Feature: Verify Login functionality of Recast Studio with valid credentials

    Scenario Outline: Verify login functionality
        Given User navigate to recast studio URL
        When User enter EmailId '<emailId>' and password '<password>'
        And User tap on "Login" button
        And Wait to load home page
        Then User able to visible create new projevt

        Examples:
            | emailId                | password   |
            | mayurimkatwe@gmail.com | asdfasdf12 |