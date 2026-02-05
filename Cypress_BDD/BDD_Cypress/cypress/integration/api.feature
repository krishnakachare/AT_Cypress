Feature: Reqress api request


    Scenario: retrive users data via api

            When user send the get request to retrive users
            Then user should retrive users on page 2


    #-----------------------------------------------------------------------------------------------------------------
    Scenario: delete users data via api

            When user send the delete request to delete users
            Then user should deleted users


    #------------------------------------------------------------------------------------------------------------------
    Scenario Outline: create users via api
        When user send the post request to create user to <name> and <job>
        Then user with <name> and <job> should be created


        Examples:
            | name    | job    |
            | krishna | tester |
            | swapnil | tester |
            | avi     | tester |
            | vishu   | tester |

# payload data (request)

#----------------------------------------------------------------------------------------------------------------

Scenario Outline: update users via api

    When user send the put request to update user to <name> and <job>
    Then user with <name> and <job> should be updated

    Examples:
        | name    | job       |
        | krishna | developer |
        | swapnil | developer |
        | avi     | developer |
        | vishu   | developer |

#------------------------------------------------------------------------------------------------------------------





# ************************************ SARIKA *******************************************************************

# Feature: Reqres API

#     Scenario: GET User Via API

#         Given User send the request to get user
#         Then User should be get users successfully


#     Scenario Outline: Create User Via API

#         When User send the post request to create user with <name> and <job>
#         Then User with <name> and <job> should be created

#         Examples:
#             | name   | job       |
#             | Sarika | Testing   |
#             | Gauri  | Developer |



#     Scenario Outline: Update User Via API

#         When User send the put request to update user with <name> and <job>
#         Then User with <name> and <job> should be updated

#         Examples:
#             | name | job       |
#             | Asma | Developer |
#             | Keya | Tester    |

#     Scenario Outline: Delete User Via API

#             When User send the delete request to delete user with <name> and <job>
#             Then User with <name> and <job> should be deleted

#             Examples:
#                 | name | job       |
#                 | Asma | Developer |
#                 | Keya | Tester    |


# ***************************************************************************************************************