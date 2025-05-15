Feature: Product catalog functionality

  Background: Background name: Valid login
    Given I open the login page
    When I login with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Sort products by price low to high
    Given I sort products by "Price (low to high)"
    Then products should be sorted in ascending order of price

  Scenario: Product image loads correctly
    Then all product images should load

  Scenario: Product details are correct
    When I click on a product
    Then I should see the correct product details