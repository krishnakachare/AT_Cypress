Feature: Instagram manin page

    Scenario: Opening the Instagram page
        Given User want to open Instagram Page
        Then User see "Instagram" in page

    @focus
    Scenario: Opening facebook page
        Given User want to open Facebook page
        Then User see "Facebook" in title


