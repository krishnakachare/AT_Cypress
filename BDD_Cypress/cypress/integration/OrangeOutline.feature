Feature: Login Functionality of OrangeHRM with SenarioOutline

    #Scenario outline used for if we have same secnario and neeed to check with multiple data

    Scenario Outline: Validate the login functionality
        Given User navigate to ornageHRM URL
        When User enter userName '<userName>' and passWord '<passWord>'
        And tap on "Login" button
        Then user should see navigating '<tab>'


        Examples:
            | userName | passWord | tab   |
            | Admin    | admin123 | Admin |
            | Admin    | admin123 | PIM   |
# | admin    | asdfasdf12 | Invalid credentials |

