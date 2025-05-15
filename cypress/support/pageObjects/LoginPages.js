import * as pages from '../pageObjects/index'
import testData from '../../fixtures/testData.json'

class LoginPage {
    get usernameInput() { return cy.get('[data-test="username"]'); }
    get passwordInput() { return cy.get('[data-test="password"]'); }
    get loginButton() { return cy.get('[data-test="login-button"]'); }
    get errorMessage() { return cy.get('[data-test="error"]'); }
  
    login({ username, password }) {
      pages.loginPage.usernameInput.type(username);
      pages.loginPage.passwordInput.type(password);
      pages.loginPage.loginButton.click();
    }

    goTo(url) {
      cy.visit(url)
  }
  }
export default new LoginPage()  