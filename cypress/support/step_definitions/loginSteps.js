import * as pages from '../pageObjects/index';
import testData from '../../fixtures/testData.json';
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the login page', () => {
  cy.visit('/');
});

When('I login with valid credentials', () => {
  pages.loginPage.login(testData.validUser);
});

When('I login with invalid credentials', () => {
  pages.loginPage.login(testData.invalidUser);
});

When('I login as a locked out user', () => {
  pages.loginPage.login(testData.lockedOutUser);
});

Then('I should be redirected to the inventory page', () => {
  pages.inventoryPage.inventoryContainer.should('be.visible');
});

Then('I should see an error message', () => {
  pages.loginPage.errorMessage.should('contain.text', 'Username and password do not match');
});

Then('I should see a locked out message', () => {
  pages.loginPage.errorMessage.should('contain.text', 'locked out');
});