Feature: Login functionlaity of reddit
  @focus
    Scenario: Login functionality with valid credentials
        Given User should navigate to reddit URL
        # When User tap on "LogIn" button
        And User Enter username "sai_testing_01" and password "asdfasdf12"
        And User tap on "LogIn" button
        And Wait to load home page
        Then User should able to be see "sai_testing_01" at top right
        


