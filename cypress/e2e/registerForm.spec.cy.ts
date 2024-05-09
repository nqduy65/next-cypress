describe("template spec", () => {
  beforeEach(() => {
    cy.visit("/auth/register");
  });

  // Hung
  it("register with empty password", () => {
    cy.get("input[name=name]").type("Hung");
    cy.get("input[name=email]").type("hung@gmail.com");

    cy.get("button").contains("Create an account").click();

    cy.get("[id*=-form-item-message]").should(
      "have.html",
      "Minimum 6 characters required"
    );
  });

  // Khanh
  it("register with empty name", () => {
    cy.get("input[name=email]").type("khanh@gmail.com");
    cy.get("input[name=password]").type("123456");

    cy.get("button").contains("Create an account").click();

    cy.get("[id*=-form-item-message]").should("have.html", "Required");
  });

  // Duy
  it("access from localhost then register", () => {
    let email = (Math.random() + 1).toString(36).substring(7);
    cy.visit("/");
    cy.get("button.sign-in").click();
    cy.get("a.sign-up").click();
    cy.get("input[name=name]").type("test");
    cy.get("input[name=email]").type(email + "@gmail.com");
    cy.get("input[name=password]").type("123456");
    cy.get("button").contains("Create an account").click();
    cy.get("p.form-success").should("have.html", "User created!");
  });

  // Tai
  it("register with invalid email", () => {
    cy.get("input[name=name]").type("Hung");
    cy.get("input[name=email]").type("hunggmail.com");
    cy.get("input[name=password]").type("hung@gmail.com");

    cy.get("button").contains("Create an account").click();

    cy.get("input[name=email]:invalid").should("have.length", 1);
  });
});
