Feature: Login functionality

  Scenario: Valid login
    Given I open the login page
    When I login with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Invalid login
    Given I open the login page
    When I login with invalid credentials
    Then I should see an error message

  Scenario: Locked out user login
    Given I open the login page
    When I login as a locked out user
    Then I should see a locked out message