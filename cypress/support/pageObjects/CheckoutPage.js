import * as pages from '../pageObjects/index'
import testData from '../../fixtures/testData.json'

class CheckoutPage {
  get firstNameInput() { return cy.get('[data-test="firstName"]'); }
  get lastNameInput() { return cy.get('[data-test="lastName"]'); }
  get postalCodeInput() { return cy.get('[data-test="postalCode"]'); }
  get continueButton() { return cy.get('[data-test="continue"]'); }
  get finishButton() { return cy.get('[data-test="finish"]'); }
  get confirmationMessage() { return cy.get('.complete-header'); }

  fillCheckoutDetails() {
    pages.checkoutPage.firstNameInput.type(testData.checkoutDetails.firstName);
    pages.checkoutPage.lastNameInput.type(testData.checkoutDetails.lastName);
    pages.checkoutPage.postalCodeInput.type(testData.checkoutDetails.postalCode);
  }

}

export default new CheckoutPage();