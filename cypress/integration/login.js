/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

describe("Test Login", () => {
  it("Login valid with already account", () => {
    cy.viewport(1700, 1000);
    //open twitter web
    cy.visit("https://twitter.com/");
    cy.get("body").contains("Already have an account?");
    cy.wait(2000);
    cy.xpath('//a[@href="/login"]').click();
    cy.wait(5000);
    cy.get(
      '[data-testid="ocfSettingsListPrimaryText"] > :nth-child(1) > .css-1qaijid'
    ).should("have.text", "Sign in to X");
    //input username
    cy.xpath("//input[@name='text']").type("ppoooowty");
    cy.contains("span", "Next").click();
    cy.get("#modal-header > :nth-child(1) > .css-1qaijid").should(
      "have.text",
      "Enter your password"
    );
    //input password
    cy.xpath("//input[@name='password']").type('cuitan123')
    cy.xpath("//input[@name='password']").then(($passwordInput) => {
      const passwordValue = $passwordInput.val();
      if (passwordValue === "") {
        cy.get('[data-testid="LoginForm_Login_Button"]').should('have.attr','tabindex','-1')
        cy.log("password null");
      } else {
        cy.get('[data-testid="LoginForm_Login_Button"]').should('have.attr','tabindex','0')
        cy.log("password not null");
        cy.get('[data-testid="LoginForm_Login_Button"]').click();
        cy.get('[data-testid="AppTabBar_Profile_Link"]').should('exist')
      }
    });
  });
});
