/// <reference types="cypress" />

describe("Registration success", () => {
  let rndname = Math.floor(Math.random() * 10000);

  it("Filling right form", () => {
    cy.visit("https://preprod.backmarket.fr/register");
    cy.get("[data-qa=accept-cta]").click();
    cy.get("#firstName").type(`toto`);
    cy.get("#lastName").type("titi");
    cy.get("#signup-email").type(`tititoto${rndname}@yopmail.com`);
    cy.get("#signup-password").type("Azerty12345");
    cy.get("[data-qa=signup-submit-button]").click();
    cy.get("[data-qa=dashboard-navigation-profil]").click();
    cy.contains(`tititoto${rndname}@yopmail.com`).should("exist");
  });
});
