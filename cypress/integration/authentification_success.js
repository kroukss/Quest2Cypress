/// <reference types="cypress" />

describe('Authentification success', () => {

    it('Filling right form', () => {
        cy.visit('https://preprod.backmarket.fr/register');
        cy.get('[data-qa=accept-cta]').click();
        cy.get('#signin-email').type(`tititoto@yopmail.com`);
        cy.get('#signin-password').type('Azerty12345');
        cy.get('[data-qa=signin-submit-button]').click();
        cy.get('[data-qa=dashboard-navigation-profil]').click();     
        cy.contains(`tititoto@yopmail.com`).should("exist");
    });   
})