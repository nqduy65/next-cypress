describe("Login page", () => {
  afterEach(() => {
    cy.exec("npx prisma db push --force-reset && npx prisma db push");
    cy.clearAllCookies();
  });

  it("Create new account and login", () => {
    cy.visit("auth/login");
    // Click on Don't have an account button
    cy.contains("Don't have an account").click();

    // Check register url
    cy.url().should("include", "/auth/register");
    cy.get(".name-input").type("Khai Hoang Tran");
    cy.get(".name-input").should("have.value", "Khai Hoang Tran");

    cy.get("input[name=email]").type("khaihoang.tran.clv@gmail.com");
    cy.get("input[name=email]").should(
      "have.value",
      "khaihoang.tran.clv@gmail.com"
    );

    cy.get("input[name=password]").type("trankhaihoang");
    cy.get("input[name=password]").should("have.value", "trankhaihoang");

    cy.get("button").contains("Create an account").click();

    cy.get("p").should("contain", "User created!");

    // Click on Already have an account button
    cy.contains("Already have an account").click();
    cy.url().should("include", "/auth/login");

    cy.get("input[name=email]").type("khaihoang.tran.clv@gmail.com");
    cy.get("input[name=email]").should(
      "have.value",
      "khaihoang.tran.clv@gmail.com"
    );
    cy.get("input[name=password]").type("trankhaihoang");
    cy.get("input[name=password]").should("have.value", "trankhaihoang");

    cy.get("button").contains("Login").click();
    cy.url().should("include", "/setting");
  });
});
