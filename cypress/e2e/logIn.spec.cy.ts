describe("template spec", () => {
  const invalidEmail = "hello";
  const validEmail = "tkh@gmail.com";
  const wrongPassword = "111";
  const validPassword = "123456";
  beforeEach(() => {
    cy.visit("auth/login");
  });

  it("Should throw error with invalid email", () => {
    cy.url().should("include", "/auth/login");

    cy.get("input[name=email]").type(invalidEmail);
    cy.get("input[name=email]").should("have.value", invalidEmail);

    cy.get("input[name=password]").type(validPassword);
    cy.get("input[name=password]").should("have.value", validPassword);

    cy.get("button").contains("Login").click();

    cy.get("input:invalid").should("have.length", 1);
  });

  it("Should throw error with wrong password", () => {
    cy.url().should("include", "/auth/login");

    cy.get("input[name=email]").type(validEmail);
    cy.get("input[name=email]").should("have.value", validEmail);

    cy.get("input[name=password]").type(wrongPassword);
    cy.get("input[name=password]").should("have.value", wrongPassword);

    cy.get("button").contains("Login").click();

    cy.get("p").should("contain.text", "Invalid Credentials");
  });
});
