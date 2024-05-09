describe("Sign in form test", () => {
  beforeEach(() => {
    cy.visit("/auth/login");
  });

  // Duy Le
  it("login with empty email", () => {
    cy.get("input[name=password]").type("123456");

    cy.get("button").contains("Sign in").click();

    cy.get("[id*=-form-item-message]").should("have.html", "Invalid email");
  });

  // Thy Tran
  it("login with wrong password", () => {
    cy.get("input[name=email]").type("hoang@gmail.com");
    cy.get("input[name=password]").type("122456");

    cy.get("button").contains("Sign in").click();

    cy.get("#error-login").should("have.html", "Invalid Credentials");
  });

  // Xuan Nguyen
  it("login with no password", () => {
    cy.get("input[name=email]").type("hoang@gmail.com");

    cy.get("button").contains("Sign in").click();

    cy.get("[id*=-form-item-message]").should(
      "have.html",
      "String must contain at least 1 character(s)"
    );
  });

  // Phat Vuong
  it("login successful", () => {
    cy.get("input[name=email]").type("hoang@gmail.com");
    cy.get("input[name=password]").type("123456");

    cy.get("button").contains("Sign in").click();

    cy.url().should("contain", "/setting");
  });

  // Luat Huynh
  it("login with invalid email", () => {
    cy.get("input[name=email]").type("hoanggmail.com");
    cy.get("input[name=password]").type("123456");

    cy.get("button").contains("Sign in").click();

    cy.get("input[name=email]:invalid").should("have.length", 1);
  });

  // Truong Nguyen
  it("login with empty email and password", () => {
    cy.get("button").contains("Sign in").click();
    cy.get("[id*=-form-item-message]").should("have.length", 2);
    cy.get("[id*=-form-item-message]").each(($el, index, $list) => {
      if (index === 0) {
        cy.wrap($el).should("have.html", "Invalid email");
      }
      if (index === 1) {
        cy.wrap($el).should("have.html", "String must contain at least 1 character(s)");
      }
    });
  });


});
