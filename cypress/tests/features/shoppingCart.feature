Feature: Shopping cart functionality

  Background: Valid login
    Given I open the login page
    When I login with valid credentials
    Then I should be redirected to the inventory page

  Scenario: Add item to cart
    When I add a product to the cart
    Then the cart badge should update accordingly

  Scenario: Remove item from cart
    Given I have items in the cart
    When I remove a product from the cart

  Scenario: Checkout process
    Given I have items in the cart
    When I complete the checkout process
    Then I should see a confirmation message