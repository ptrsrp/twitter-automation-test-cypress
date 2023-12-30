/// <reference types="Cypress" />
import LoginPage from '../classes/login.class'

// Test case untuk login
describe("Login with Positive Test", () => {
  const loginPage = new LoginPage();

  it("should login successfully with valid credentials", () => {
    loginPage.visitTwitterWeb();
    cy.wait(3000)
    loginPage.openLoginPage();
    cy.wait(3000)
    loginPage.login("ppoooowty", "cuitanku123");
    
  });
});

describe("Login with Negative Test", () => {
  const loginPage = new LoginPage();
  it("Login unsuccessfully with username is null", () => {
    loginPage.visitTwitterWeb();
    cy.wait(3000)
    loginPage.openLoginPage();
    cy.wait(3000)
    loginPage.login("{selectall}{backspace}", "cuitanku123");
  });

  it("Login unsuccessfully with password is null", () => {
    loginPage.visitTwitterWeb();
    cy.wait(3000)
    loginPage.openLoginPage();
    cy.wait(3000)
    loginPage.login("ppoooowty", "{selectall}{backspace}");
  });
});
