/// <reference types="Cypress" />
/// <reference types="@cypress/xpath" />

class LoginPage {
  visitTwitterWeb() {
    cy.visit("https://twitter.com/");
    cy.get("body").contains("Already have an account?");
  }

  openLoginPage() {
    cy.xpath('//a[@href="/login"]').click();
    cy.get('[data-testid="ocfSettingsListPrimaryText"] > :nth-child(1) > .css-1qaijid').should("have.text", "Sign in to X");
  }

  fillUsername(username) {
    cy.xpath("//input[@name='text']").type(username);
  }

  fillPassword(password) {
    cy.xpath("//input[@name='password']").type(password);
  }

  submitUsername() {
    cy.xpath("//input[@name='text']").then(($usernameInput) => {
      const usernameValue = $usernameInput.val();
      if (usernameValue === "") {
        cy.contains("span", "Next").click();
        cy.log("username null");
        cy.get('[data-testid="toast"]').should('be.visible')
      } else {
        cy.contains("span", "Next").click();
        cy.log("username not null");
        cy.get("#modal-header > :nth-child(1) > .css-1qaijid").should("have.text",
          "Enter your password"
        );
      }
    });
  }

  submitPassword() {
    cy.xpath("//input[@name='password']").then(($passwordInput) => {
      const passwordValue = $passwordInput.val();
      if (passwordValue === "") {
        cy.get('[data-testid="LoginForm_Login_Button"]').should("have.attr","tabindex","-1");
        cy.get('[data-testid="LoginForm_Login_Button"]').click();
        cy.log("password null");
      } else {
        cy.get('[data-testid="LoginForm_Login_Button"]').should("have.attr","tabindex","0");
        cy.get('[data-testid="LoginForm_Login_Button"]').click();
        cy.log("password not null");
      }
    });
  }

  login(username, password) {
    this.fillUsername(username);
    this.submitUsername();
    cy.get('[data-testid="mask"]').then(($elementParent) => {
      if($elementParent.find('[name="password"]').length > 0 ){
        cy.log('username not null')
        this.fillPassword(password);
        this.submitPassword();
        
      }
      else{
        cy.log('username null')
      }
    })
    this.verifyLoginSuccess;
  }
  verifyLoginSuccess() {
    cy.url().should("include", "twitter.com/home");
    cy.get('[data-testid="AppTabBar_Profile_Link"]').should("exist");
  }
}

export default LoginPage;
